import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
  providers: [MovieService]
})
export class ActorListComponent implements OnInit {
  actors: string[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.actors = this.movieService.getActors();
  }

}
