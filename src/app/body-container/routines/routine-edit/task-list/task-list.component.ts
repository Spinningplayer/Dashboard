import {Component, Input, OnInit} from '@angular/core';
import {RoutinesService} from '../../../../services/routines.service';
import {Routine} from '../../../../models/routine.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() id: string;
  routine: Routine = new Routine();

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.routineSelected.subscribe(routine => {
      this.routine = routine;
      this.id = routine._id;
    });

    this.service.routinesChanged.subscribe(routines => {
      console.log("searching routine")
      for (const r of routines) {
        if (r._id === this.id) {
          this.routine = r;
        }
      }
    });
  }

}
