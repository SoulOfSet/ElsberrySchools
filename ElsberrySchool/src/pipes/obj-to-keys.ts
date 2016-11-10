import {Pipe} from '@angular/core';

@Pipe({
  name: 'ObjToKeys'
})

export class ObjToKeys{

  transform(value): any{
    var keys = [];

    for(let key in value){
      keys.push(key)
    }

    return keys;
  }
}
