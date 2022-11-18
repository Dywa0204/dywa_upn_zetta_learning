import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Post } from 'src/app/interface/post';
import { PostsService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  formText = "ADD NEW";
  onProses = false;
  post: Post = {
    userId: 0,
    body: '',
    title: ''
  };

  postForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    userId: new FormControl(0, [Validators.required, Validators.min(0)]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    if(id){
      this.formText = "EDIT"
      this.onGetPost(id);
    }
    this.onProses = false;
  }

  onGetPost(id: number){
    this.postService.getPost(id).subscribe(
      (response) => {
        this.postForm.controls.id.setValue(id);
        this.postForm.controls.userId.setValue(response.userId);
        this.postForm.controls.title.setValue(response.title);
        this.postForm.controls.body.setValue(response.body);
      },
      (error: HttpErrorResponse) => this.postService.errorAlert(error.message)
    );
  }

  onSubmit(){
    
    if(this.postForm.valid){
      this.onProses = true;
      let id = this.route.snapshot.queryParams['id'];
      if(id) this.onEditPost();
      else this.onCreatePost();
    }
  }

  onCreatePost(): void{
    this.postService.createPost(this.postForm.value).subscribe(
      (response) => {
        this.postService.postList.push(response);
        console.log(response)
      },
      (error: any) => {
        this.postService.errorAlert(error.message)
        this.onProses = false
      },
      () => this.postService.successAlert().then(() => {
        this.router.navigate([""])
      })
    );
  }

  onEditPost(){
    this.postService.updatePost(this.postForm.value).subscribe(
      (response) => {
        console.log(response)
      },
      (error: any) => {
        this.postService.errorAlert(error.message)
        this.onProses = false
      },
      () => this.postService.successAlert().then(() => {
        this.router.navigate([""])
      })
    );
  }

  backToList(){
    this.router.navigate([""])
  }
}
