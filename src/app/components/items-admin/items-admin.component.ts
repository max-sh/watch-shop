import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-items-admin',
  templateUrl: './items-admin.component.html',
  styleUrls: ['./items-admin.component.css']
})
export class ItemsAdminComponent implements OnInit {

  items: any;

  constructor(private api:DataApiService) { }

  ngOnInit() {
    this.getItems();
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
