import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {

  title = "Movie List";
  movies: Movie[]= [];
  popularMovies: Movie[]= [];

  filterText: string = "";
  error: any;

  constructor(private alertify: AlertifyService,private movieService:MovieService,private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.movieService.getMovies(params["categoryId"]).subscribe(data=>{
        this.movies=data;
        this.popularMovies=data;
      });
    },error => this.error = error);  
  }

  deleteMovie(movieId:number){
    this.movieService.deleteMovie(movieId).subscribe(data=>{
      this.alertify.error("Movie deleted.");
      this.ngOnInit();
    });
  }
}

