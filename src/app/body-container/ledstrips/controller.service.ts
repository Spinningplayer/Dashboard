import { Injectable } from '@angular/core';
import {env} from '../../environments/env';
import {Http, Headers} from '@angular/http';
import {Controller} from '../../models/Controller.model';
import {toPromise} from 'rxjs/operator/toPromise';
import {Ledstrip} from '../../models/ledstrip.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LedstripsService {
  public controllersChanged = new Subject<Controller[]>();
  public controllersSelected = new Subject<Controller>();

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrlControllers = env.serverUrl + '/controllers/';
  private controllers: Controller[] = [];

  constructor(private http: Http) { }

  public selectController(controller: Controller) {
    this.controllersSelected.next(controller);
  }

  public getControllers(): Promise<Controller[]> {
    return this.http.get(this.serverUrlControllers,  {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json() as Controller[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public addController(controller: Controller): Promise<Controller> {
    return this.http.post(
      this.serverUrlControllers,
      JSON.stringify(controller),
      {headers: this.headers}
      ).toPromise()
      .then( response => {
        this.getControllers().then(controllers => {
          this.controllers = controllers;
          this.controllersChanged.next(this.controllers.slice());
        });
        return response.json() as Controller;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public deleteController(id: number): Promise<number> {
    return this.http.delete(
      this.serverUrlControllers + id,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.getControllers().then(controllers => {
          this.controllers = controllers;
          this.controllersChanged.next(this.controllers.slice());
        });
        return response.json() as number;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public updateController(controller: Controller, id: number): Promise<Controller> {
    return this.http.put(
      this.serverUrlControllers + id,
      JSON.stringify(controller),
      {headers: this.headers}
      ).toPromise()
      .then(response => {
        this.getControllers().then(controllers => {
          this.controllers = controllers;
          this.controllersChanged.next(this.controllers.slice());
        });
        return response.json() as Controller;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}
