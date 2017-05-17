import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {

  categories: any;
  toDelete: number;

  constructor(
    private router: Router,
    private api: DataApiService) { }

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

  delete() {
    this.api.deleteCategory(this.toDelete).subscribe(data => {
      console.log(data);
      this.getCategories();
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
