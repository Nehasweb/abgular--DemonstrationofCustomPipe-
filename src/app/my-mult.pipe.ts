import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, param: number): number {
    return (value * param);
  }

}
