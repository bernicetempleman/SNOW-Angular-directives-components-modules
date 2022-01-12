import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    return value.trim().split(' ').length;
  }

}
