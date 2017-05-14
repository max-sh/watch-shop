import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: any;
  item: any;

  constructor(
    private api:DataApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getItem();
  }
  
  getItem() {
    // this.item = this.api.getItemById(this.id);

    this.api.getItemById(this.id).subscribe(item => {
      this.item = item;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
