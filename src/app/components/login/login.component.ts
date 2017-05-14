import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    if(this.email == null || this.password == null) {
      console.log('permission denied');
    }
    else {
      const user = {
        email: this.email,
        password: this.password
      };

      this.authService.authenticateUser(user).subscribe(data => {
        if(data.result == 'success') {
          this.authService.setRole(data.role);
          this.authService.setLogedIn(true);
          this.authService.storeUserData(user);
          this.router.navigate(['/']);
        }
        else {
          console.log('permission denied');
        }
      },
      err => {
        console.log(err);
        return false;
      });
    }

    
  }
}
