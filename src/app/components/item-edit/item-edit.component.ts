import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { DataApiService } from '../../services/data-api.service';
import { Category } from '../../services/data-api.service';
import { Item } from '../../services/data-api.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id: number;
  name: string;
  manufacturer: string;
  price: number;
  description: string;
  category: number;
  img: string;
  available: boolean;

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
    this.id = this.route.snapshot.params['id'];
    this.getCategories();
    this.getCurrentItem(this.id);
  }

  getCurrentItem(id) {
    this.api.getItemById(this.id).subscribe(item => {
      this.name = item.name;
      this.description = item.description;
      this.manufacturer = item.manufacturer;
      this.price = item.price;
      this.category = item.category;
      this.img = item.image_url;
      if(item.available == 1) this.available = true;
      else this.available = false;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getCategories() {
    this.api.getCategories().subscribe(categories => {
      this.categories = categories;
    },
    err => {
      console.log(err);
      return false;
    });
  }

    validateAndEdit() {
      this.err = false;
      let item: Item =  {
        id: this.id,
        name: this.name,
        manufacturer: this.manufacturer,
        description: this.description,
        price: this.price,
        category: this.categories[this.category - 1].id,//this.category.toString(),
        available: this.available,
        image_url: this.img
      }
      let res = this.validation.validateItem(item);
      if(res.length != 0) {
        this.err = true;
        this.errMsg = res;
      }
      else {
        
        this.api.editItem(item).subscribe(data => {
          console.log(data);
          this.result = "Successfuly edited";
          document.getElementById("openModalButton").click();
        }, error => {
          this.result = "Error";
          console.log(error.json());
        });
      }
    }
}
