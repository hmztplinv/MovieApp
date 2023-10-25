import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url="http://localhost:3000/movies";

    constructor(private httpClient:HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(this.url);
    }
}