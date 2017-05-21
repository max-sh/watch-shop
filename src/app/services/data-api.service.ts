import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable}  from 'rxjs/Observable';

@Injectable()
export class DataApiService {

  url: string = 'http://localhost:8090/dashboard/api/api.php';
  constructor(private http: Http) { }

  getCategories() {
    var body = 'table=categories&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let categories = this.http.post(this.url, body, {headers: headers}).map(res => res.json());

    return categories as Observable<Category[]>;
  }

  getCategoryById(id: number) {
    var body = 'table=categories&method=getById&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return items as Observable<Category>;
  }

  editCategory(category: Category) {
    var body = 'table=categories&method=edit&id=' + category.id + '&name=' + category.categoryName + '&description=' + category.description + '&visible=' + category.visible;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }

  addCategory(category: Category) {
    var body = 'table=categories&method=create&name=' + category.categoryName + '&description=' + category.description + '&visible=' + category.visible;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }
  
  deleteCategory(id: number) {
    var body = 'table=categories&method=delete&id=' + id;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }

  getItems() {
    var body = 'table=products&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  findItems(name) {
    var body = 'table=products&method=find&name=' + name;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  getItemById(id) {
    var body = 'table=products&method=getById&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return items;
  }

  getItemsByCategory(id) {
    var body = 'table=products&method=getByCategory&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let items = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return items as Observable<Item[]>;
  }

  editItem(item: Item) {
    var body = 'table=products&method=edit' + 
    '&id=' + item.id + 
    '&name=' + item.name + 
    '&manufacturer=' + item.manufacturer +
    '&description=' + item.description + 
    '&available=' + item.available +
    '&price=' + item.price + 
    '&image=' + item.image_url + 
    '&category=' + item.category;

    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }

  addItem(item: Item) {
    var body = 'table=products&method=create' + 
    '&name=' + item.name + 
    '&manufacturer=' + item.manufacturer +
    '&description=' + item.description + 
    '&available=' + item.available +
    '&price=' + item.price + 
    '&image=' + item.image_url + 
    '&category=' + item.category;

    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }

  deleteItem(id: number) {
    var body = 'table=products&method=delete&id=' + id;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, body, {headers: headers});
  }

  getUsers() {
    var body = 'table=users&method=get';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let users = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return users as Observable<User[]>;
  }

  getUserById(id: number) {
    var body = 'table=users&method=getById&id=' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let users = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return users as Observable<User>;
  }

  checkEmail(email: string) {
    var body = 'table=users&method=checkEmail&email=' + email;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let res = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return res;
  }

  registerUser(user) {
    var body = 'table=users&method=create&email=' + user.email + '&pass=' + user.password;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let res = this.http.post(this.url, body, {headers: headers}).map(res => res.json());
    return res;
  }
}
export interface Category {
  id? : string,
  categoryName? : string,
  description? : string,
  visible? : any
}
export interface Item {
  id? : number,
  name? : string,
  manufacturer : string,
  description : string,
  price : number,
  category : string,
  available: boolean,
  image_url: string
}
export interface User {
  id?: number,
  user_name?: String,
  email?: String,
  password?: String,
  role?: String
}