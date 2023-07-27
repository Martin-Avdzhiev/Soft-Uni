import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyPipe'
})
export class MultiplyPipePipe<T> implements PipeTransform {

  transform(value1: number, value2: number): string {
    return (Number(value1) * Number(value2)).toFixed(2);
  }

}
