import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value:string, limit?:number) {
        if(!value)
            return null;
        limit=limit? limit:150;
        if(limit>value.length)
            return value;

        return value.substr(0,limit)+"...";
    }
}