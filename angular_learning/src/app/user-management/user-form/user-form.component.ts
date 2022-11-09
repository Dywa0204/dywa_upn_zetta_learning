import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-service/user.model';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  inputVal: User = new User;
  formText = "ADD NEW";

  form: FormGroup;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      idNumber: 0,
      name: "",
      age: 0,
      gender: "male",
      email: "",
      position: "",
      marital: "",
      address: "",
      zipCode: 0,
      city: "",
      country: ""
    });
  }

  ngOnInit(): void {
    let uid = this.route.snapshot.queryParams['uid']
    if(uid){
      this.formText = "EDIT"
      let index = this.searchIndex(parseInt(uid));
      if(index > -1){
        this.inputVal = this.userService.getAllUser()[index];
      }
    }else{

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
    if(this.form.valid){
      let uid = this.route.snapshot.queryParams['uid']
      if(uid){
        let index = this.searchIndex(parseInt(uid));
        if(index > -1){
          this.userService.editUser(index, this.form.value);

          this.router.navigate([""]);
        }
      }else{
        if(!this.userService.checkId(this.form.value.idNumber)){
          this.router.navigate([""]);

          this.userService.onFormSubmit(this.form.value);
        }else{
          alert("The ID already Used!!")
        }
      }
    }
  }

  backToList(){
    this.router.navigate([""])
  }
}
