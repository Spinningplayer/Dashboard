import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Switch} from '../models/switch.model';
import {Subject} from 'rxjs/Subject';
import { env } from '../environments/env';


@Injectable()
export class SwitchesService {
  public switchesChanged = new Subject<Switch[]>();
  public switchSelected = new Subject<Switch>();

  private headers = new Headers({'content-type': 'application/json'})
  private serverUrl = env.serverUrl + '/switches/';
  private switches: Switch[];

  constructor(private http: Http) { }

  public selectSwitch(switchO: Switch) {
    this.switchSelected.next(switchO);
  }

  public getSwitches(): Promise<Switch[]> {
    return this.http.get(
      this.serverUrl,
      { headers: this.headers})
      .toPromise()
      .then( switches => {
        return switches.json() as Switch[];
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public getSwitch(id: String): Promise<Switch> {
    return this.http.get(
      this.serverUrl,
      {headers: this.headers})
      .toPromise()
      .then( switchO => {
        return switchO.json() as Switch;
      })
      .catch(err => {
        return this.handleError(err);
      })
  }

  public addSwitch(switchO: Switch): Promise<Switch> {
    return this.http.post(
      this.serverUrl,
      JSON.stringify(switchO),
      {headers: this.headers})
      .toPromise()
      .then(switchR => {
        this.getSwitches().then(switches => {
          this.switches = switches;
          this.switchesChanged.next(this.switches.slice());
        });
        return switchR.json() as Switch;
      })
      .catch(err => {
        return this.handleError(err);
      })
  }

  public updateSwitch(id: String, switchO: Switch): Promise<Switch> {
    return this.http.put(
      this.serverUrl + id,
      JSON.stringify(switchO),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getSwitches().then(switches => {
          this.switches = switches;
          this.switchesChanged.next(this.switches.slice());
        });
        return response.json() as Switch;
      })
      .catch(err => {
        return this.handleError(err);
      })
  }

  public deleteSwitch(id: String): Promise<any> {
    return this.http.delete(
      this.serverUrl + id,
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getSwitches().then(switches => {
          this.switches = switches;
          this.switchesChanged.next(this.switches.slice());
        })
        return true;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('Switches');
    return Promise.reject(error.message || error);
  }
}
