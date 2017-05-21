import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  name: string;
  pass: string;
  errMsg: string;
  err: boolean;

  constructor(
    private api: DataApiService,
    private authService: AuthService,
    private router: Router,
    private validation: ValidationService
  ) { }

  ngOnInit() {
    
  }

  onRegisterSubmit() {
    this.err = false;
    console.log(this.email);

    let res = this.validation.validateUser({ email: this.email, password: this.pass});
    if(res.length == 0) {
      this.api.checkEmail(this.email).subscribe(data => {
        if(data.result) {
          this.errMsg = 'Email already registered. ';
          this.err = true;
        }
        else {
          this.api.registerUser({ email: this.email, password: this.pass}).subscribe(data => {
            
            this.authService.authenticateUser({ email: this.email, password: this.pass}).subscribe(data => {
              if(data.result == 'success') {
                this.authService.setRole(data.role);
                this.authService.setLogedIn(true);
                this.authService.storeUserData({ email: this.email, password: this.pass});
                this.router.navigate(['/']);
              }
              else {
                this.errMsg = 'Permission denied';
                this.err = true;
              }
            },
            err => {
              this.errMsg = 'Incorrect data';
              this.err = true;
              return false;
            });

          },
          err => {
            console.log(err);
          });
        }
      },
      err => {
        console.log(err);
        return false;
      });
    }
    else {
      this.errMsg = res;
      this.err = true;
    }
  }
}
