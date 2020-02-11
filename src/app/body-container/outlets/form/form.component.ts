import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SwitchesService } from '../../../services/switches.service';
import {RoutinesService} from '../../../services/routines.service';
import {Routine} from '../../../models/routine.model';
import { Switch } from '../../../models/switch.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  editMode = false;
  switchForm: FormGroup;
  switch: Switch = new Switch();
  routines: Routine[];


  constructor(private service: SwitchesService,
              private routineService: RoutinesService) { }

  ngOnInit() {
    this.initForm();
    this.service.switchSelected
      .subscribe(switchO => {
        this.switch = switchO;
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
      this.service.updateSwitch(this.switch._id, this.switchForm.value)
        .then(response => {
          this.editMode = false;
        });
    } else {
      this.service.addSwitch(this.switchForm.value);
    }
    this.editMode = false;
    this.initForm();
  }

  cancel() {
    this.editMode = false;
    this.initForm();
  }

  private initForm() {
    let switchName = '';
    let onRoutine;
    let offRoutine;

    if (this.editMode) {
      console.log('Setting Values');
      switchName = this.switch.name;
      onRoutine = this.switch.onRoutine;
      offRoutine = this.switch.offRoutine;
    }

    this.switchForm = new FormGroup({
      'name': new FormControl(switchName, Validators.required),
      'onRoutine': new FormControl(onRoutine, Validators.required),
      'offRoutine': new FormControl(offRoutine, Validators.required)
    });
  }
}
