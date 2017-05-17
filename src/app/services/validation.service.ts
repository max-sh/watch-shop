import { Injectable } from '@angular/core';
import { Category } from '../services/data-api.service';

@Injectable()
export class ValidationService {

  constructor() { }

  validateCategory(categoryName: string, description: string): string {
    var msg: string = "";
    if(categoryName.length == 0) msg = msg.concat("Name is empty. "); 
    if(description.length == 0) msg = msg.concat('Description is empty. ');
    return msg;
  }
}
