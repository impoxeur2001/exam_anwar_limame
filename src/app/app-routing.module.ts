import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [{path:'', component:ListMoviesComponent},{path: 'details/:id' , component: MovieDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
