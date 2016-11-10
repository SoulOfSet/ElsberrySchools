import {Pipe} from '@angular/core';

@Pipe({
  name: 'ObjToKeys'
})

export class ObjToKeys{

  transform(value, args:string[]): any{
    let keys = []

    for(let key in value){
      keys.push(key)
    }

    return keys;
  }
}
