import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ItemComponent } from './components/item/item.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { CategoriesAdminComponent } from './components/categories-admin/categories-admin.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth.service';
import { DataApiService } from './services/data-api.service';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemNewComponent } from './components/item-new/item-new.component';
import { ItemsAdminComponent } from './components/items-admin/items-admin.component';
import { CategoryComponent } from './components/category/category.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'item/:id', component: ItemComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: HomeAdminComponent },
  { path: 'admin/categories', component: CategoriesAdminComponent },
  { path: 'admin/category/:id', component: CategoryEditComponent },
  { path: 'admin/items', component: ItemsAdminComponent },
  { path: 'admin/item/:id', component: ItemEditComponent },
  { path: 'admin/users', component: UsersAdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarUserComponent,
    NavbarAdminComponent,
    HomeComponent,
    CatalogComponent,
    ItemComponent,
    HomeAdminComponent,
    CategoriesAdminComponent,
    UsersAdminComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    ItemEditComponent,
    ItemNewComponent,
    ItemsAdminComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
