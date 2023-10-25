import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  // movies=["filmA","filmB","filmC","filmD"];
  movies = [
    {id:1,title:"film1",description:"description1",imageUrl:"1.jpg"},
    {id:2,title:"film2",description:"description2",imageUrl:"2.jpg"},
    {id:3,title:"film3",description:"description3",imageUrl:"3.jpg"}
  ];

}

