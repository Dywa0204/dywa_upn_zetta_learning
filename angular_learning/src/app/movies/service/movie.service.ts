import { Injectable } from '@angular/core';

import { movies, actors, Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor() { }

  getMovies(){
    return movies;
  }

  getMovie(title: string){
    let movie;
    let found = false;
    for(let i = 0; i < movies.length; i++){
      if(title == movies[i].title.replace(/\s+/g, '_').toLowerCase()){
        movie = movies[i];
        found = true;
      }
    }

    if(found) return movie;
    else return false
  }

  getActors(){
    return actors;
  }
}
