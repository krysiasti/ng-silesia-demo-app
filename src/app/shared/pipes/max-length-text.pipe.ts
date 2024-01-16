import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLengthText',
  standalone: true,
})
export class MaxLengthTextPipe implements PipeTransform {
  transform(text: string, length: number = 10): string {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  }
}
