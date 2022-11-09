import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

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

  onSubmit(item: any){
    if(item.form.valid){
      let uid = this.route.snapshot.queryParams['uid']
      if(uid){
        let index = this.searchIndex(parseInt(uid));
        if(index > -1){
          this.userService.editUser(index, item.form.value);

          this.router.navigate([""]);
        }
      }else{
        if(!this.userService.checkId(item.form.value.idNumber)){
          this.router.navigate([""]);

          this.userService.onFormSubmit(item.form.value);
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
