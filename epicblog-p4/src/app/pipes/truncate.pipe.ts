import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, arg: number = 70): string {
    return value.substring(0, arg) + '...';
  }
}