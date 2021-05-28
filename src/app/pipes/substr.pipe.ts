import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr',
})
export class SubstrPipe implements PipeTransform {
  substring = '';
  num = 0;

  transform(value: string): string {
    if (this.num % 2) {
      this.substring = 'Sign In';
    } else if (!(this.num % 2)) {
      this.substring = 'SignUp';
    }
    this.num++;
    return this.substring;
  }
}
