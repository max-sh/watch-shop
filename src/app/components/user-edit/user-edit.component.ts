import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { User } from '../../services/data-api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: any;
  user: User;

  user_name: String;
  email: String;
  role: String;

  constructor(
    private api: DataApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);
  }

  getUser(id) {
    this.api.getUserById(id).subscribe(user => {
      this.user = user;
      this.role = this.user.role;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  editUser() {
    console.log(this.role);
  }

}
