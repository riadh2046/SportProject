import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix',
})
export class AsterixPipe implements PipeTransform {
  //changer toutes les voyelles par *
  transform(ch: string) {
    //a,e,i,o,u,y
    //A,E,I,O,U,Y
    let voyelles=["a","e","i","o","u","y","A","E","I","O","U","Y"];
    let result:string ='';
    for (let i = 0; i < ch.length; i++) {
      let inter=ch[i];
      for (let j = 0; j < voyelles.length; j++) {
        if (inter==voyelles[j]) {
          inter="*";
          break;
          
        }
      }
      result += inter;
      //result = result=inter;(concatenation)
    }
    return result;
  }
}
