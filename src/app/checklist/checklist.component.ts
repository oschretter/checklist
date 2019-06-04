import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  item: FormGroup;
  itemType = ['body-care', 'clothes', 'drug'];
  constructor() {
    this.item = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      itemName: new FormControl(),
      itemType: new FormControl(),
    });
  }

  ngOnInit() {
  }

}
