import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string;
  items;
  constructor(private api:DataApiService) { }

  ngOnInit() {
  }

  find() {
    this.api.findItems(this.name).subscribe(items => {
      this.items = items;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
