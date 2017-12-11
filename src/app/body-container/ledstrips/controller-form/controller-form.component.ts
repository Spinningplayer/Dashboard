import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Controller} from '../../../models/Controller.model';
import {ControllerService} from '../controller.service';

@Component({
  selector: 'app-controller-form',
  templateUrl: './controller-form.component.html',
  styleUrls: ['./controller-form.component.css']
})
export class ControllerFormComponent implements OnInit {
  editMode = false;
  controllerForm: FormGroup;
  controller: Controller;

  constructor(private controllerService: ControllerService) { }

  ngOnInit() {
    this.initForm()
    this.controllerService.controllersSelected
      .subscribe(controller => {
        this.controller = controller;
        this.editMode = true;
        this.initForm();
      }
    );
  }

  save() {
    if(this.editMode) {
      this.controllerService.updateController(this.controllerForm.value, this.controller._id)
        .then(response => {
          this.editMode = false;
        }).catch(err => console.log(err));
    } else {
      this.controllerService.addController(this.controllerForm.value)
        .then(result => {})
        .catch(err => console.log(err));
    }

    this.controllerForm.patchValue({
      'name': null,
      'address': null
    });
  }

  cancel() {
    this.controllerForm.patchValue({
      'name': null,
      'address': null
    });
  }

  private initForm() {
    let controllerName = '';
    let controllerAddress = '';

    if (this.editMode) {
      controllerName = this.controller.name;
      controllerAddress = this.controller.address;
    }

    this.controllerForm = new FormGroup({
      'name': new FormControl(controllerName, Validators.required),
      'address': new FormControl(controllerAddress, Validators.required),
    });
  }

}
