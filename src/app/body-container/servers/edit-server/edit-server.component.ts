import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    this.initForm();
    this.serverService.serverSelected.subscribe(server => {
      this.server = server;
      console.log('new server: ' + server.name);
      this.editMode = true;
      this.initForm();
    });
  }

  save() {
    if (this.editMode) {
      this.serverService.updateServer(this.serverForm.value, this.server.id)
        .then(response => {
          console.log(response);
          this.editMode = false;
        }).catch(err => console.log(err));
    } else {
      this.serverService.addServer(this.serverForm.value)
        .then(response => {
          console.log('server created');
        }).catch(err => console.log(err));
    }
    this.serverForm.patchValue({
      'name': null,
      'address': null,
      'ram': null,
    });
  }

  cancel() {
    this.serverForm.patchValue({
      'name': null,
      'address': null,
      'ram': null,
    });
  }

  private initForm() {
    let serverName = '';
    let serverAddress = '';
    let serverRam;

    if (this.editMode) {
      serverName = this.server.name;
      serverAddress = this.server.address;
      serverRam = this.server.ram;
    }

    this.serverForm = new FormGroup({
      'name': new FormControl(serverName, Validators.required),
      'address': new FormControl(serverAddress, Validators.required),
      'ram': new FormControl(serverRam, Validators.required),
    });
  }
}
