import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return "undefined"
    }
    const splitString = value.split('.').map((s) => {
      const trimmedString = s.trim();
      if (trimmedString.length > 0) {
        return `${trimmedString[0].toUpperCase()}${trimmedString.slice(1)}`;
      }
      return '';
    });
    return splitString.join('. ');
  }
}
