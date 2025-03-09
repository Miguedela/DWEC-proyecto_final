import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearFecha',
  standalone: false
})
export class FormatearFechaPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const parts = value.split('-');
    if (parts.length !== 3) return value; // Devuelve el valor original si el formato es incorrecto

    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  }
}

