
import { Movie } from './movie';
export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id:1,title:"film1",description:"description1",imageUrl:"1.jpg"},
            {id:2,title:"film2",description:"description2",imageUrl:"2.jpg"},
            {id:3,title:"film3",description:"description3",imageUrl:"3.jpg"}
          ];
    }

    getMovies():Movie[]{
        return this.movies;
    }

    //deger donmezse undefined doner
    // ya da tsconfig de strictNullChecks: false yapilir
    getMovieById(id:number):Movie | undefined{
        return this.movies.find(i=>i.id===id);
    }

}