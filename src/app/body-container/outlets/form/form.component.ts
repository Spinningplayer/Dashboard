import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Outlet} from '../../../models/outlet.model';
import {OutletsService} from '../../../services/outlets.service';
import {RoutinesService} from '../../../services/routines.service';
import {Routine} from '../../../models/routine.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  editMode = false;
  outletForm: FormGroup;
  outlet: Outlet = new Outlet({});
  routines: Routine[];


  constructor(private service: OutletsService,
              private routineService: RoutinesService) { }

  ngOnInit() {
    this.initForm();
    this.service.outletSelected
      .subscribe(outlet => {
        this.outlet = outlet;
        this.editMode = true;
        this.initForm();
      });

    this.routineService.getRoutines()
      .then(routines => {
        this.routines = routines;
        this.initForm();
      });
  }

  save() {
    console.log('Saving');
    if (this.editMode) {
      this.service.updateOutlet(this.outlet._id, this.outletForm.value)
        .then(response => {
          this.editMode = false;
        });
    } else {
      this.service.addOutlet(this.outletForm.value);
    }
    this.editMode = false;
    this.initForm();
  }

  cancel() {
    this.editMode = false;
    this.initForm();
  }

  private initForm() {
    let outletName = '';
    let outletTurnOn;
    let outletTurnOff;

    if (this.editMode) {
      console.log('Setting Values');
      outletName = this.outlet.name;
      outletTurnOn = this.outlet.turnOn;
      outletTurnOff = this.outlet.turnOff;
    }

    this.outletForm = new FormGroup({
      'name': new FormControl(outletName, Validators.required),
      'turnOn': new FormControl(outletTurnOn, Validators.required),
      'turnOff': new FormControl(outletTurnOff, Validators.required)
    });
  }
}
