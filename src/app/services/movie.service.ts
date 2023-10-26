import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url="http://localhost:3000/movies";

    constructor(private httpClient:HttpClient) { }

    createMovie(movie:Movie): Observable<Movie> {
        return this.httpClient.post<Movie>(this.url, movie).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getMovies(categoryId:number): Observable<Movie[]> {
        let newUrl = this.url;
        if (categoryId) {
            newUrl += "?categoryId=" + categoryId
        }

        return this.httpClient.get<Movie[]>(newUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getMovieById(movieId:number): Observable<Movie> {
        return this.httpClient.get<Movie>(this.url + "/" + movieId).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log("Error: " + error.error.message)
        } else {
            // server-side error
            switch (error.status) {
                case 404:
                    console.log('Not found');
                    break
                case 403:
                    console.log('Access denied');
                    break
                case 500:
                    console.log('Internal server error');
                    break
                default:
                    console.log('Unknown error');
                    break
            }
        }
        return throwError("Something went wrong; please try again later.")

    
    }


}