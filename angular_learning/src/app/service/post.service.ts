import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Post } from '../interface/post';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postList: Post[] = [];
  post: Post = {
    userId: 0,
    body: '',
    title: ''
  };

  private apiUrl = environment.apiUrl;  
    
  constructor(private http: HttpClient) { }  
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/posts').pipe(
      map(posts => this.postList = posts.map(post => ({
        ...post,
        isLoading: false
      })))
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + '/posts/' + id.toString()).pipe(
      map(post => this.post = post)
    );
  }

  createPost(post: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts', post);
  }

  updatePost(post: any): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + '/posts/' + post.id, post);
  }

  deletePost(id: number | undefined): Observable<unknown> {
    return this.http.delete<unknown>(this.apiUrl + '/posts/' + id);
  }

  errorAlert(message: string){
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: message,
    })
  }

  successAlert(){
    return Swal.fire({
      icon: 'success',
      title: 'Success'
    })
  }
}
