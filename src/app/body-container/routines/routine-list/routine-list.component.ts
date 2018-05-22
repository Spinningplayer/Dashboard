import { Component, OnInit } from '@angular/core';
import {RoutinesService} from '../../../services/routines.service';
import {Routine} from '../../../models/routine.model';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {

  public routines: Routine[];

  constructor(private service: RoutinesService) { }

  ngOnInit() {
    this.service.getRoutines()
      .then(routines => this.routines = routines)
      .catch(err => console.log(err));

    this.service.routinesChanged.subscribe(routines => this.routines = routines);
  }

}
