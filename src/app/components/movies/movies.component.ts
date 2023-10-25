import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieRepository } from 'src/app/models/movie.repository';
import { AlertifyService } from 'src/app/services/alertify.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Movie List";
  movies: Movie[]= [];
  popularMovies: Movie[]= [];

  filterText: string = "";

  constructor(private alertify: AlertifyService,private httpClient:HttpClient) {
    
  }

  btClick() {
    this.alertify.success("Button Clicked");
  }

  ngOnInit(): void {
    this.httpClient.get<Movie[]>("http://localhost:3000/movies").subscribe(data=>{
      this.movies=data;
      this.popularMovies=data;
    })
  }
}

