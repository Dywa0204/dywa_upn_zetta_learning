import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    civility: new FormControl('mr', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    user_status: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userForm.valid){
      Swal.fire({
        icon: 'success',
        title: 'SUCCESS',
        text: 'Form Valid'
      })
    } else{
      Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'Form Not Valid'
      })
    }
  }

  backToList(){
    this.router.navigate([""])
  }
}
