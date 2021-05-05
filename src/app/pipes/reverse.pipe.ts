import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
   reversed='';
  transform(value: string): string {
    
    {
      this.reversed=value.split("").reverse().join("");
    }
    return this.reversed;
  }

}
