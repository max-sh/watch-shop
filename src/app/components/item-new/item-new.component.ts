import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { DataApiService } from '../../services/data-api.service';
import { Category } from '../../services/data-api.service';
import { Item } from '../../services/data-api.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  id: number;
  name: string;
  manufacturer: string;
  price: number;
  description: string;
  category: number;
  img: string;
  available: boolean;
  index: number = 0;

  err: boolean;
  categories: any;
  result: string;
  errMsg: string;

  constructor(
    private api: DataApiService,
    private router: Router,
    private route: ActivatedRoute,
    private validation: ValidationService
  ) { }

  ngOnInit() {
    this.id = 0;
    this.name = '';
    this.manufacturer = '';
    this.price = 0;
    this.description = '';
    this.img = '';
    this.available = false;
    this.getCategories();
  }


  validateAndAdd() {
    console.log("Categories");
    console.log("index = " + this.category);

    console.log(this.categories[this.category]);
    this.err = false;
      let item: Item =  {
        id: 0,
        name: this.name,
        manufacturer: this.manufacturer,
        description: this.description,
        price: this.price,
        category: this.categories[this.category].id,//this.category.toString(),
        available: this.available,
        image_url: this.img
      }
      let res = this.validation.validateItem(item);
      if(res.length != 0) {
        this.err = true;
        this.errMsg = res;
      }
      else {
        
        this.api.addItem(item).subscribe(data => {
          console.log(data);
          this.result = "Successfuly added";
          document.getElementById("openModalButton").click();
        }, error => {
          this.result = "Error";
          console.log(error.json());
        });
      }
  }


  getCategories() {
    this.api.getCategories().subscribe(categories => {
      this.categories = categories;
      this.category = 1;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
