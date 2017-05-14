import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable}  from 'rxjs/Observable';

@Injectable()
export class DataApiService {

  constructor(private http: Http) { }

  getCategories() {
    var body = 'table=categories&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // this.http
    //   .post('http://localhost:8090/dashboard/api/api.php',
    //     body, {
    //       headers: headers
    //     })
    //     .subscribe(data => {
    //           //alert('ok');
    //           console.log(data);
    //     }, error => {
    //         console.log(JSON.stringify(error.json()));
    //     });
    
    // console.log(this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map((res:Response) => res.json()));
    let categories = this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());

    return categories as Observable<Category[]>;
  }

  getItems() {
    var body = 'table=products&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  getItemById(id) {
    var body = 'table=products&method=getById&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  getItemsByCategory(id) {
    var body = 'table=products&method=getByCategory&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  getUsers() {
    var body = 'table=users&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let users = this.http.post('http://localhost:8090/dashboard/api/api.php', body, {headers: headers}).map(res => res.json());
    return users as Observable<User[]>;
  }
}
interface Category {
    $id? : String,
    $categoryName? : String,
    $description? : String,
    $visible? : number
}
interface Item {
  $id? : number,
  $name? : String,
  $manufacturer : String,
  $description : String,
  $price : String,
  $category : String,
  $available: boolean,
  $image_url: String
}
interface User {
  $id?: number,
  $user_name?: String,
  $email?: String,
  $password?: String
}