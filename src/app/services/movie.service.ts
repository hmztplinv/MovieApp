import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url="http://localhost:3000/movies";

    constructor(private httpClient:HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(this.url).pipe(
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