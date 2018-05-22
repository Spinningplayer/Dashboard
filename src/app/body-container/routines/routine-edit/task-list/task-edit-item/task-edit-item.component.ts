import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../../../../models/task.model';
import {RoutinesService} from '../../../../../services/routines.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-edit-item',
  templateUrl: './task-edit-item.component.html',
  styleUrls: ['./task-edit-item.component.css']
})
export class TaskEditItemComponent implements OnInit {
  @Input() id: string;
  form: FormGroup;
  task: Task;

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.routineSelected.subscribe(routine => this.id = routine._id);
    this.initForm();
  }

  save() {
    this.task = new Task();
    this.task.sleepTime = this.form.value.sleepTime;
    this.task.type = this.form.value.type;
    this.task.value = this.form.value.value;
    this.service.addTask(this.task, this.id)
      .then(response => {
        this.initForm();
      })
      .catch(err => console.log(err));
  }

  initForm() {
    const value = '';
    const type = '';
    const sleepTime = 0;

    this.form = new FormGroup({
      'type': new FormControl(type, Validators.required),
      'value': new FormControl(value, Validators.required),
      'sleepTime': new FormControl(sleepTime, Validators.required)
    });
  }

}
