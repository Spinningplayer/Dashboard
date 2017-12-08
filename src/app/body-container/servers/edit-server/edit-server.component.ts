import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Server} from '../../../models/server.model';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  editMode = false;
  serverForm: FormGroup;
  server: Server;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.serverSelected.subscribe(server => {
      this.server = server
      console.log('new server: ' + server.name);
    });
  }

  save() {
    if(this.editMode) {
      this.serverService.updateServer(this.server, this.server.id)
        .then(response => {
          console.log('server updated');
        }).catch(err => console.log(err));
    } else {
      this.serverService.addServer(this.server)
        .then(response => {
          console.log('server created');
        }).catch(err => console.log(err));
    }
  }

  cancel() {

  }

  private initForm() {
    let serverName = '';
    let serverAddress = '';
    let serverRam = '';

    if(this.editMode) {

    }
  }

  this.serverForm = new FormGroup({

  })

}
