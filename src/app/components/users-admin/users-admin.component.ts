import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  users: any;

  constructor(private api:DataApiService) { }

  ngOnInit() {
    this.getUsers();
    
  }

  getUsers() {
    this.api.getUsers().subscribe(users => {
      this.users = users;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
