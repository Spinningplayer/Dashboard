import { Component, OnInit } from '@angular/core';
import {OutletsService} from '../../services/outlets.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css'],
  providers: [OutletsService]
})
export class OutletsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
