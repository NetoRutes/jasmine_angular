import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array :any ,valueToFilter :any): any {
     if(valueToFilter === undefined) return array;

     return array.filter(function(item:any){
       return item.name.toLowerCase().includes(valueToFilter.toLowerCase());
     })
   }

}