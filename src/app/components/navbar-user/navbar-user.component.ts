import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  email: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.loadUserData();
    this.email = this.authService.getEmail();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
