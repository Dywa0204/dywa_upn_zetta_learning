import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MovieService]
})
export class DashboardComponent implements OnInit {
  movies = [
    {
      title: '',
      director: '',
      writer: '',
      desc: '',
      genre: [''],
      img: '',
      actors: ['']
    }
  ]

  constructor(private movieSercvice: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieSercvice.getMovies();
  }

}
