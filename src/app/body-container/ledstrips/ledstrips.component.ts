import { Component, OnInit } from '@angular/core';
import {LedstripsService} from './controller.service';

@Component({
  selector: 'app-ledstrips',
  templateUrl: './ledstrips.component.html',
  styleUrls: ['./ledstrips.component.css'],
  providers: [LedstripsService]
})
export class LedstripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
