import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  CKEDITOR_BASEPATH = '/assets/js/ckeditor';

  constructor() { }

  ngOnInit() {
    window['CKEDITOR']['replace']( 'editor1' );
  }

}
