import { Component, OnInit } from '@angular/core';
import {Server} from '../../../models/server.model';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers: Server[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getServers()
      .then(servers => this.servers = servers)
      .catch(error => console.log(error));
  }

}
