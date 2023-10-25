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
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;

  filterText: string = "";

  constructor(private alertify: AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  btClick() {
    this.alertify.success("Button Clicked");
  }

  ngOnInit(): void {
  }
}

