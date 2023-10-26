import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[MovieService]
})
export class MovieDetailsComponent implements OnInit{

  movie:Movie;
  movieUpdateForm:FormGroup;

  constructor(private fb:FormBuilder,private movieService :MovieService,private activatedRotue:ActivatedRoute ) {
    this.movieUpdateForm=this.fb.group({
      id:["",Validators.required],
      title:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      categoryId:["",Validators.required]
    });
   }


  ngOnInit(): void {
    this.activatedRotue.params.subscribe(params=>{
      this.movieService.getMovieById(params["movieId"]).subscribe(data=>{
        this.movie=data;
        this.movieUpdateForm.patchValue(data);
      });
    });
  }

  updateMovie(){
    if(this.movieUpdateForm.valid){
      this.movie=Object.assign({},this.movieUpdateForm.value);
      this.movieService.updateMovie(this.movie).subscribe(data=>{
        console.log(data);
      });
    }
  }

}
