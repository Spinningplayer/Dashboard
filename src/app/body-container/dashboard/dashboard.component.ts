import { Component, OnInit } from '@angular/core';
import {StatsService} from './server-statistics/stats.service';
import {LedstripControllerService} from './ledstrip-service';
import {LedstripSocketService} from './ledstrip-socket.service';
import { SwitchesService } from '../../services/switches.service';
import { RoutinesService } from '../../services/routines.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [StatsService, {provide: LedstripControllerService, useClass: LedstripSocketService}, SwitchesService, RoutinesService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
