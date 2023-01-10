import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_TOKEN :any= "8a2af15238f90718d584793802c2b2f4";
   url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN

  constructor(private http :HttpClient) {}

  getMovies(){
    return  this.http.get<any>(this.url)
  }
}
