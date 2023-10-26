import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieCreateComponent } from './components/movies/movie-create/movie-create.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/category/:categoryId', component: MoviesComponent},
  {path: 'movie-create', component: MovieCreateComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies/:movieId', component: MovieDetailsComponent}
  
  

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
