import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user: any;
  role: string;
  logedIn: boolean;

  constructor(private http: Http) { }

  authenticateUser(user){
    var body = 'table=users&method=auth&email=' + user.email + '&pass=' + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }

  getEmail(): string {
    return localStorage.getItem('email');
  }

  loadUserData(): void {
    this.role = localStorage.getItem('role');
    if(this.role) this.setLogedIn(true);
  }

  storeUserData(user){
    localStorage.setItem('email', user.email);
    localStorage.setItem('role', this.role);
  }

  logout() {
    this.role = null;
    this.user = null;
    this.logedIn = false;
    localStorage.clear();
  }

  setLogedIn(logedIn: boolean): void {
    this.logedIn = logedIn;
  }

  loggedIn(): boolean {
    return this.logedIn;
  }
}
