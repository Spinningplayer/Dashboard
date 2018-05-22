import {Component, Input, OnInit} from '@angular/core';
import {Routine} from '../../../../models/routine.model';
import {RoutinesService} from '../../../../services/routines.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-routine-edit-form',
  templateUrl: './routine-edit-form.component.html',
  styleUrls: ['./routine-edit-form.component.css']
})
export class RoutineEditFormComponent implements OnInit {
  public routine: Routine = new Routine();
  form: FormGroup;
  editMode = false;

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.routineSelected.subscribe(routine => {
      this.routine = routine;
      this.editMode = true;
      this.initForm();
    });

    this.initForm();
  }

  save() {
    if (this.editMode) {
      this.routine.name = this.form.value.name;
      this.service.updateRoutine(this.routine)
        .then(response => {
          this.editMode = false;
          this.initForm();
        })
        .catch(err => console.log(err));
    } else {
      this.routine = new Routine();
      this.routine.name = this.form.value.name;
      this.service.addRoutine(this.routine)
        .catch(err => console.log(err));
      this.initForm();
    }
  }

  cancel() {
    this.editMode = false;
    this.initForm();
  }

  private initForm() {
    let routineName = '';

    if (this.editMode) {
      routineName = this.routine.name;
    }

    this.form = new FormGroup({
      'name': new FormControl(routineName, Validators.required)
    });
  }
}
