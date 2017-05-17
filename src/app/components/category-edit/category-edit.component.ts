import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { DataApiService } from '../../services/data-api.service';
import { Category } from '../../services/data-api.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  id: any;
  name: string;
  description: string = "";
  visible: boolean;
  err: boolean;
  errMsg: string;
  result: string;

  CKEDITOR_BASEPATH = '/assets/js/ckeditor';

  constructor(
    private api: DataApiService,
    private router: Router,
    private route: ActivatedRoute,
    private validation: ValidationService
  ) { }

  ngOnInit() {
    this.err = false;
    this.id = this.route.snapshot.params['id'];
    //window['CKEDITOR']['replace']( 'description' );

    this.api.getCategoryById(this.id).subscribe(category => {
      this.name = category.categoryName;
      this.description = category.description;
      if(category.visible == 1) this.visible = true;
      else this.visible = false;
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

  validateCategory() {
    this.err = false;
    let res = this.validation.validateCategory(this.name, this.description);
    if(res.length != 0) {
      this.err = true;
      this.errMsg = res;
    }
    else {
      let cat = {
        id: this.id,
        categoryName: this.name,
        description: this.description,
        visible: this.visible
      }
      this.api.editCategory(cat).subscribe(data => {
        console.log(data);
        this.result = "Successfuly edited";
        document.getElementById("openModalButton").click();
      }, error => {
        this.result = "Error";
        console.log(error.json());
      });
    }
  }

  delete() {
    
    this.api.deleteCategory(this.id).subscribe(data => {
      this.router.navigate(['/admin/categories']);
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
