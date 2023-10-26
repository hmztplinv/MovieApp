import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { FilterMoviePipe } from './pipes/filter-movie.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    FilterMoviePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
