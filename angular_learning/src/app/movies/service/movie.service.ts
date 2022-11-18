import { Injectable } from '@angular/core';

import { movies, actors } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor() { }

  getMovies(){
    return movies;
  }
}
