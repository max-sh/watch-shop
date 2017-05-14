import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {

  categories: any;

  constructor(private api:DataApiService) { }

  ngOnInit() {
    this.getCategories();
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
}
