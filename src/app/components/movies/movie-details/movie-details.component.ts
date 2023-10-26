import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[MovieService]
})
export class MovieDetailsComponent implements OnInit{

  movie:Movie;

  constructor(private movieService :MovieService,private activatedRotue:ActivatedRoute ) { }


  ngOnInit(): void {
    this.activatedRotue.params.subscribe(params=>{
      this.movieService.getMovieById(params["movieId"]).subscribe(data=>{
        this.movie=data;
      });
    });
  }

}
