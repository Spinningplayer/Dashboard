import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../servers/server.service';
import {Server} from '../../../models/server.model';

@Component({
  selector: 'app-server-statistics',
  templateUrl: './server-statistics.component.html',
  styleUrls: ['./server-statistics.component.css']
})
export class ServerStatisticsComponent implements OnInit {
  private servers: Server[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getServers()
      .then(servers => {
        this.servers = servers;
      });
  }

}
