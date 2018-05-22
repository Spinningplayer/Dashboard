import {Component, Input, OnInit} from '@angular/core';
import {Routine} from '../../../../models/routine.model';
import {RoutinesService} from '../../../../services/routines.service';

@Component({
  selector: '[app-routine-list-item]',
  templateUrl: './routine-list-item.component.html',
  styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent implements OnInit {
  @Input() routine: Routine;

  constructor(private service: RoutinesService) { }

  ngOnInit() {
  }

  select() {
    this.service.selectRoutine(this.routine);
  }

  delete() {
    this.service.deleteRoutine(this.routine._id)
      .then()
      .catch(err => console.log(err));
  }

  execute() {
    this.service.executeRoutine(this.routine._id)
      .then()
      .catch(err => console.log(err));
  }

}
