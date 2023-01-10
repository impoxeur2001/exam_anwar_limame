import { Component } from '@angular/core';
import {ListMoviesComponent} from "../list-movies/list-movies.component";
import {Movie_model} from "../movie_model";
import {MovieService} from "../movie.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  allMovies : Movie_model[] | undefined;

  idMovie:number = 0;

  private routeSub: Subscription = new Subscription();


  searchText='';
  moviesJson = new MovieService(this.http);
  getAllMovies=()=>{

    this.moviesJson.getMovies().subscribe(data => {
      this.allMovies=data.results;
      console.log(this.allMovies);
    });

  }
  constructor(private http: HttpClient,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getAllMovies();
    this.idMovie= this.route.snapshot.params['id'];
  }

}
