import { Injectable } from '@angular/core';
import {LedstripControllerService, LedstripMessage} from './ledstrip-service';
import {Controller} from '../../models/Controller.model';
import {Ledstrip} from '../../models/ledstrip.model';
import {Headers, Http} from '@angular/http';

@Injectable()
export class LedstripApiService implements LedstripControllerService{
  controller: Controller;
  ledstrip: Ledstrip;
  controllerUrl: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  setController(controller: Controller): boolean {
    if (this.controller = controller) {
      this.controllerUrl = 'http://' + this.controller.address + ':8080';
      return true;
    } else {
      return false;
    }
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
    this.http.post(
      this.controllerUrl,
      JSON.stringify(msg),
      {headers: this.headers}
    ).toPromise().then(response => {
      return msg;
    }).catch(error => {
      return error;
    });
    return msg;
  }
}
