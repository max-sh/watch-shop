import { Injectable } from '@angular/core';
import { Category } from '../services/data-api.service';
import { Item } from '../services/data-api.service';
import { DataApiService } from '../services/data-api.service';

@Injectable()
export class ValidationService {

  constructor(
    private api: DataApiService
  ) { }

  validateCategory(categoryName: string, description: string): string {
    var msg: string = "";
    if(categoryName.length == 0) msg = msg.concat("Name is empty. "); 
    if(description.length == 0) msg = msg.concat('Description is empty. ');
    return msg;
  }
  validateItem(item: Item): string {
    var msg: string = "";
    if(!item.name || item.name.length == 0) msg = msg.concat('Name is empty. ');
    if(!item.manufacturer || item.manufacturer.length == 0) msg = msg.concat('Manufacturer is empty. ');
    if(!item.description || item.description.length == 0) msg = msg.concat('Description is empty. ');
    if(!item.price) msg = msg.concat('Price is empty. ');
    if(!item.image_url || item.image_url.length == 0) msg = msg.concat('Image is empty. ');
    if(!item.category || item.category.length == 0) msg = msg.concat('Category is empty. ');
    return msg;
  }

  validateUser(user): string {
    var msg: string = '';
    if(!user.email || user.email.length == 0) msg = msg.concat('Empty email address. ');
    if(!user.password || user.password.length == 0) msg = msg.concat('Empty password. ');
    return msg;
  }
}
