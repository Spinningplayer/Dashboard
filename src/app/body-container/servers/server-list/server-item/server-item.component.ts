import {Component, Input, OnInit} from '@angular/core';
import {Server} from '../../../../models/server.model';
import {ServerService} from '../../server.service';

@Component({
  selector: '[app-server-item]',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  @Input() server: Server;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    console.log(JSON.stringify(this.server));
  }

  deleteServer() {
    console.log('deleting server');
    this.serverService.deleteServer(this.server.id).then(result => {
      console.log('server deleted with id: ' + result);
    })
    .catch(err => console.log(err));
  }

  selectServer() {
    this.serverService.selectServer(this.server);
  }
}
