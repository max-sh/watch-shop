import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { DataApiService } from '../../services/data-api.service';
import { Category } from '../../services/data-api.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  id: any;
  name: string;
  description: string;
  visible: boolean;
  err: boolean;
  errMsg: string;
  result: string;

  constructor(
    private api: DataApiService,
    private router: Router,
    private route: ActivatedRoute,
    private validation: ValidationService
  ) { }

  ngOnInit() {
    this.name = '';
    this.description = '';
    this.visible = false;
  }

  validateAndAddCategory() {
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
      this.api.addCategory(cat).subscribe(data => {
        console.log(data);
        this.result = "Successfuly added";
        document.getElementById("openModalButton").click();
      }, error => {
        this.result = "Error";
        console.log(error.json());
      });
    }
  }
}
