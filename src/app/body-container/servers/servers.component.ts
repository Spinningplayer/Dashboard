import { Component, OnInit } from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: []
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
