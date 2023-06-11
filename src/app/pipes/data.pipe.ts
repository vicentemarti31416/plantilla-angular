import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(values: string[], query: string): string[] | undefined {
    console.log("values = " + values);
    console.log("query = " + query);
    if (query === undefined || query === '') {
      return undefined;
    } else {
      return values
      .filter((value) => value.includes(query))
      .map((value) => value.toUpperCase())
    }
  }

}
