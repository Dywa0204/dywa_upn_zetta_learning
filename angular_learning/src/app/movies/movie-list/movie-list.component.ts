import { Component, OnInit } from '@angular/core';
import { Movie } from '../service/movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieSercvice: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieSercvice.getMovies();
  }

  getSlugURL(val: string){
    return val.replace(/\s+/g, '_').toLowerCase()
  }

}
