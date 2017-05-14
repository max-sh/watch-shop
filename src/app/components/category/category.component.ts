import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;
  items: any;
  id: any;

  constructor(
    private api: DataApiService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        // console.log(params);
        this.id = params.id;
        this.getItems(this.id);
    });
    

    //console.log('Init');
    this.id = this.route.snapshot.params['id'];
    this.getItems(this.id);
    this.getCategories();
  }

  getItems(id: any) {
    //console.log('Get items ' + id);
    this.api.getItemsByCategory(id).subscribe(items => {
      this.items = items;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getCategories() {
    //console.log('get categories');
    this.api.getCategories().subscribe(categories => {
      this.categories = categories;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  redirect(id) {
    //console.log('navigate');
    this.router.navigate(['/category/'+id]);
  }
}
