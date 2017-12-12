import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LedstripService} from '../ledstrip.service';
import {Ledstrip} from '../../../models/ledstrip.model';
import {ControllerService} from '../controller.service';
import {Controller} from '../../../models/Controller.model';

@Component({
  selector: 'app-ledstrip-form',
  templateUrl: './ledstrip-form.component.html',
  styleUrls: ['./ledstrip-form.component.css']
})
export class LedstripFormComponent implements OnInit {
  editMode = false;
  ledstripForm: FormGroup;
  ledstrip: Ledstrip;
  controller: Controller;
  cSelected: false;

  constructor(private stripService: LedstripService, private controllerService: ControllerService) { }

  ngOnInit() {
    this.initForm();
    this.stripService.ledstripsSelected
      .subscribe(strip => {
        this.ledstrip = strip;
        this.editMode = true;
        this.initForm();
      });

    this.controllerService.controllersSelected
      .subscribe(controller => {
          this.controller = controller;
          this.cSelected = false;
      });
  }

  save() {
    if (this.editMode) {
      this.stripService.updateLedstrip( this.ledstrip._id, this.ledstripForm.value)
        .then(response => {
          console.log('ledstrip updated');
          this.editMode = false;
        });
    } else {
        this.stripService.addLedstrip(this.ledstripForm.value)
          .then(response => {
            console.log(';edstrip created');
          });
    }
    this.ledstripForm.patchValue({
      'name': null,
      'address': null
    });
  }

  cancel() {
    this.ledstripForm.patchValue({
      'name': null,
      'address': null
    });
  }

  private initForm() {
    let ledStripName = '';
    let ledStripAddress;
    if(this.editMode) {
      ledStripName = this.ledstrip.name;
      ledStripAddress = this.ledstrip.address;
    }
    this.ledstripForm = new FormGroup({
      'name': new FormControl(ledStripName, Validators.required),
      'address': new FormControl(ledStripAddress, Validators.required)
    });
  }
}
