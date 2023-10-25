
import { Movie } from './movie';
export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id:1,title:"film1",description:"description1",imageUrl:"1.jpg",isPopular:true,datePublished:new Date("2020-10-10")},
            {id:2,title:"film2",description:"description2",imageUrl:"2.jpg",isPopular:true,datePublished:new Date("2020-10-10")},
            {id:3,title:"film3",description:"description3",imageUrl:"3.jpg",isPopular:false,datePublished:new Date("2020-10-10")}
          ];
    }

    getMovies():Movie[]{
        return this.movies;
    }

    getPopularMovies():Movie[]{
        return this.movies.filter(i=>i.isPopular);
    }

    //deger donmezse undefined doner
    // ya da tsconfig de strictNullChecks: false yapilir
    getMovieById(id:number):Movie | undefined{
        return this.movies.find(i=>i.id===id);
    }

}