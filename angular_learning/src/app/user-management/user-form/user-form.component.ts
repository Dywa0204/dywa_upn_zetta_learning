import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  formText = "ADD NEW";

  userForm = new FormGroup({
    idNumber : new FormControl(0, [Validators.required]),
    name : new FormControl('', [Validators.required]),
    age : new FormControl(0, [Validators.required]),
    gender : new FormControl('male', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    position : new FormControl('', [Validators.required]),
    marital : new FormControl('', [Validators.required]),
    addresses : new FormGroup({
      address: new FormControl('', [Validators.required]),
      zipCode: new FormControl(0, [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    }, [Validators.required])
  }, [Validators.required])

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let uid = this.route.snapshot.queryParams['uid']
    if(uid){
      this.formText = "EDIT"
      let index = this.searchIndex(parseInt(uid));
      if(index > -1){
        this.userForm.setValue(this.userService.getUser(index));
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
          this.router.navigate([""]);
        }
      }
      
      //ADD
      else{
        if(!this.userService.checkId(this.userForm.value.idNumber!)){
          this.userService.addUser(this.userForm.value);
          this.router.navigate([""]);
        }else{
          alert("The ID already Used!!")
        }
      }
    } else {
      alert("Form Not Valid!!")
    }
  }

  backToList(){
    this.router.navigate([""])
  }
}
