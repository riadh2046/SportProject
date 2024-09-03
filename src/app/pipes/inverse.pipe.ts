import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipe implements PipeTransform {
  // concatenation
  transform(ch:string) {
    let ch1=""
    for (let i = 0; i < ch.length; i++) {
      ch1=ch[i] + ch1
      
    }
    return ch1;
  }

}
