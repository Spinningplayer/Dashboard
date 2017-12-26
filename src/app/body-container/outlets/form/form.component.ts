import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Outlet} from '../../../models/outlet.model';
import {OutletsService} from '../../../services/outlets.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  editMode = false;
  outletForm: FormGroup;
  outlet: Outlet;

  constructor(private service: OutletsService) { }

  ngOnInit() {
    this.initForm();
    this.service.outletSelected
      .subscribe(outlet => {
        this.outlet = outlet;
        this.editMode = true;
        this.initForm();
      });
  }

  save() {
    if (this.editMode) {
      this.service.updateOutlet(this.outlet._id, this.outletForm.value)
        .then(response => {
          this.editMode = false;
        });
    } else {
      this.service.addOutlet(this.outletForm.value);
    }
    this.initForm();
  }

  cancel() {
    this.editMode = false;
    this.initForm();
  }

  private initForm() {
    let outletName = '';
    let outletNumber;

    if (this.editMode) {
      outletName = this.outlet.name;
      outletNumber = this.outlet.number;
    }

    this.outletForm = new FormGroup({
      'name': new FormControl(outletName, Validators.required),
      'number': new FormControl(outletNumber, Validators.required)
    });
  }
}
