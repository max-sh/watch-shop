import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  categories: any;
  items: any;

  constructor(private api:DataApiService) { }

  ngOnInit() {
    this.getCategories();
    this.getItems();
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

  getItems() {
    this.api.getItems().subscribe(items => {
      this.items = items;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
