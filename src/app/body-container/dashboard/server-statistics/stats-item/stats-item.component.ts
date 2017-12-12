import {Component, Input, OnInit} from '@angular/core';
import {Stats} from '../../../../models/Stats.model';
import {Server} from '../../../../models/server.model';
import * as io from 'socket.io-client';
import {StatsService} from '../stats.service';

@Component({
  selector: 'app-stats-item',
  templateUrl: './stats-item.component.html',
  styleUrls: ['./stats-item.component.css']
})
export class StatsItemComponent implements OnInit {
  @Input() stat: Stats = new Stats();
  @Input() server: Server;
  private socket;
  connection = false;

  constructor(private service: StatsService) {
  }

  ngOnInit() {
    this.service.getStats(this.server.address)
      .then(stats => {
        this.stat = stats;
        this.connection = true;
      }).catch(error => {
        this.connection = false;
    });

    this.socket = io('http://' + this.server.address + ':3001');

    this.socket.on('stats', (data) => {
      if (!this.connection) this.connection = true;
      this.stat.cpuLoad = data.cpuLoad;
      this.stat.ramUsage = data.ramUsage / 1024 / 1024;
    });
  }
}
