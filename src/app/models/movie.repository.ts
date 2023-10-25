
import { Movie } from './movie';
export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id:1,title:"film1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa adipisci commodi magnam quam quibusdam nulla natus consectetur sit voluptatem est deserunt ea, placeat cumque esse tempora, nobis aperiam pariatur blanditiis.",imageUrl:"1.jpg",isPopular:true,datePublished:new Date("2020-10-10")},
            {id:2,title:"film2",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa adipisci commodi magnam quam quibusdam nulla natus consectetur sit voluptatem est deserunt ea, placeat cumque esse tempora, nobis aperiam pariatur blanditiis.",imageUrl:"2.jpg",isPopular:true,datePublished:new Date("2020-10-10")},
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