import { Component, OnInit } from '@angular/core';
import { SwitchesService } from '../../services/switches.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css'],
  providers: [SwitchesService]
})
export class OutletsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
