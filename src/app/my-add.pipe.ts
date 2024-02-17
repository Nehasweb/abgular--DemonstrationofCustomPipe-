import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'MyAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: number): number {
    return  ( value + param);
  }

}
