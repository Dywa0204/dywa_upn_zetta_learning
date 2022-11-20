import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movieFound = false;
  movie: any

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    let movieTitle = this.route.snapshot.queryParams['title'];
    if(movieTitle){
      this.movie = this.movieService.getMovie(movieTitle);

      if(this.movie) this.movieFound = true;
      else this.movieFound = false;
    }
  }

}
