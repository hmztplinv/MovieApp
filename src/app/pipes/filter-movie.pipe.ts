import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {

  transform(movies:Movie[],filterText:string): Movie[] {
    filterText = filterText.toLocaleLowerCase();
    console.log(filterText);
    console.log(movies);

    return filterText?movies.filter((m:Movie)=>m.title.toLocaleLowerCase().indexOf(filterText)!==-1 
    || m.description.toLocaleLowerCase().indexOf(filterText)!==-1):movies;

  }

}
