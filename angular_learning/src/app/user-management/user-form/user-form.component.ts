import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  formText = "ADD NEW";

  userFormAddresses = new FormGroup({
    address: new FormControl('', [Validators.required]),
    zipCode: new FormControl(0, [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  })

  userForm = new FormGroup({
    idNumber : new FormControl(0, [Validators.required, Validators.min(0)]),
    name : new FormControl('', [Validators.required]),
    age : new FormControl(0, [Validators.required]),
    gender : new FormControl('Male', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    position : new FormControl('', [Validators.required]),
    marital : new FormControl('', [Validators.required]),
    addresses : new FormArray([
      this.userFormAddresses
    ])
  })

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let uid = this.route.snapshot.queryParams['uid']
    if(uid){
      this.formText = "EDIT"
      let index = this.searchIndex(parseInt(uid));
      if(index > -1){
        let user = this.userService.getUser(index);
        for(let i = 0; i < user.addresses.length - 1; i++){
          this.addNewAddress();
        }
        this.userForm.setValue(user);
      }
    }
  }

  searchIndex(uid: number){
    let id = -1;

    for(let i = 0; i < this.userService.getAllUser().length; i++){
      if(this.userService.getAllUser()[i].idNumber == uid){
        id = i;
        break;
      }
    }

    return id;
  }

  onSubmit(){
    if(this.userForm.valid){
      let uid = this.route.snapshot.queryParams['uid'] //Get UID From routing parameter

      //EDIT
      if(uid){
        let index = this.searchIndex(parseInt(uid));
        if(index > -1){
          this.userService.editUser(index, this.userForm.value);
          Swal.fire({
            icon: 'success',
            title: 'Data Saved'
          }).then(() => {
            this.router.navigate([""]);
          })
        }
      }
      
      //ADD
      else{
        if(!this.userService.checkId(this.userForm.value.idNumber!)){
          this.userService.addUser(this.userForm.value);
          Swal.fire({
            icon: 'success',
            title: 'Data Saved'
          }).then(() => {
            this.router.navigate([""]);
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'The ID already Used!!'
          })
        }
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Form Not Valid!!'
      })
    }
  }

  addNewAddress(){
    let addresses = this.userForm.get('addresses') as FormArray;
    addresses.push(this.userFormAddresses)
  }

  backToList(){
    this.router.navigate([""])
  }

  trackByFn(index: any) {
    return index;
  }
}
