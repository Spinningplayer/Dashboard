import { Component, OnInit } from '@angular/core';
import {ControllerService} from './controller.service';
import {LedstripService} from './ledstrip.service';

@Component({
  selector: 'app-ledstrips',
  templateUrl: './ledstrips.component.html',
  styleUrls: ['./ledstrips.component.css'],
  providers: []
})
export class LedstripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
