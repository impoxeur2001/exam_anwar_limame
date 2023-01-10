import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../movie.service";
import {Movie_model} from "../movie_model";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  allMovies : Movie_model[] | undefined;
  searchText='';
  moviesJson = new MovieService(this.http);
  getAllMovies=()=>{

    this.moviesJson.getMovies().subscribe(data => {
      this.allMovies=data.results;
      console.log(this.allMovies);
    });

  }
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getAllMovies();

  }




}
