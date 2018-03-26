import { Injectable } from '@angular/core';
import {LedstripControllerService, LedstripMessage} from './ledstrip-service';
import {Controller} from '../../models/Controller.model';
import {Ledstrip} from '../../models/ledstrip.model';
import * as io from 'socket.io-client';

@Injectable()
export class LedstripSocketService implements LedstripControllerService {
  controller: Controller;
  ledstrip: Ledstrip;
  private socket;

  constructor() { }

  setController(controller: Controller): boolean {
    console.log('selected controller: ' + controller.name);
    this.controller = controller;
     // this.socket = io('http://' + this.controller.address + ':8080');

    this.socket = new WebSocket('ws://' + this.controller.address + ':81');

    return this.socket.connected;
  }

  setLedstrip(ledstrip: Ledstrip): boolean {
    if (this.ledstrip = ledstrip) {
      return true;
    } else {
      return false;
    }
  }

  sendMessage(message: string): LedstripMessage {
    const msg: LedstripMessage = {
      address: this.ledstrip.address,
      color: message
    };
    if (this.socket.send(JSON.stringify(msg))) {
      return msg;
    } else {
      return null;
    }
  }
}
