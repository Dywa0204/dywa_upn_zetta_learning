import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostsService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) { 
    
  }

  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts(): void{
    this.postService.getPosts().subscribe(
      () => this.posts = this.postService.postList,
      (error: HttpErrorResponse) => this.postService.errorAlert(error.message)
    );
  }

  onDeletePost(id: number | undefined): void{
    const index = this.postService.postList.findIndex((obj) => obj.id === id)

    this.postService.postList[index].isLoading = true;

    this.postService.deletePost(id).subscribe(
      () => this.postService.postList.splice(index, 1),
      (error: HttpErrorResponse) => this.postService.errorAlert(error.message),
      () => this.postService.successAlert()
    );
  }

  /* onCreatePost(): void{
    this.postService.createPost(this.post).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating posts')
    );
  }

  onUpdatePost(): void{
    this.postService.updatePost(this.post).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done update posts')
    );
  } */
  
}
