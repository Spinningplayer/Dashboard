import { Component, OnInit } from '@angular/core';
import {RoutinesService} from '../../../services/routines.service';
import {Routine} from '../../../models/routine.model';

@Component({
  selector: 'app-routine-edit',
  templateUrl: './routine-edit.component.html',
  styleUrls: ['./routine-edit.component.css']
})
export class RoutineEditComponent implements OnInit {

  public routine: Routine;

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.routineSelected.subscribe(routine => this.routine = routine);
  }

}
