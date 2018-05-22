import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../../../../models/task.model';
import {RoutinesService} from '../../../../../services/routines.service';

@Component({
  selector: '[app-task-item]',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() id: string;
  @Input() task: Task;

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.routineSelected.subscribe(routine => {
      this.id = routine._id;
    });
  }

  delete() {
    this.service.deleteTask(this.task._id, this.id)
      .then()
      .catch(err => console.log(err));
  }

}
