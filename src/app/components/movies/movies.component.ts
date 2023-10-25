import { Component, OnInit } from '@angular/core';
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

  constructor(private alertify: AlertifyService,private movieService:MovieService) {
    
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data=>{
      this.movies=data;
      this.popularMovies=data;
    })
  }
}

