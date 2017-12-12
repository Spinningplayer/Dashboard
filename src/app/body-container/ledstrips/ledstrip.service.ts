import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {env} from '../../environments/env';
import {Ledstrip} from '../../models/ledstrip.model';
import {Subject} from 'rxjs/Subject';
import {ControllerService} from './controller.service';
import {Controller} from '../../models/Controller.model';

@Injectable()
export class LedstripService implements OnInit {
  public ledstripsChanged = new Subject<Ledstrip[]>();
  public ledstripsSelected = new Subject<Ledstrip>();

  private serverUrlLedstrips = env.serverUrl + '/ledstrips/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private ledstrips: Ledstrip[] = [];
  private controller: Controller;

  constructor(private http: Http,
              private controllerService: ControllerService) { }

  ngOnInit(): void {
    this.controllerService.controllersSelected
      .subscribe(controller => {
        this.controller = controller;
        this.getLedstrips(this.controller._id).then(strips => {
          console.log('new ledstrips gotten: ' + strips);
          }
        );
      });
  }

  public getLedstrips(id: string): Promise<Ledstrip[]> {
      return this.http.get(
        this.serverUrlLedstrips + this.controller._id,
        {headers: this.headers}
      ).toPromise()
        .then(response => {
          console.log(response.json());
          return response.json() as Ledstrip[];
        })
        .catch(error => {
          return this.handleError(error);
        });
  }

  public addLedstrip(ledstrip: Ledstrip, id: string): Promise<Ledstrip> {
    return this.http.post(
      this.serverUrlLedstrips + id,
      JSON.stringify(ledstrip),
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.getLedstrips(id).then(ledstrips => {
          this.ledstrips = ledstrips;
          this.ledstripsChanged.next(this.ledstrips.slice());
        });
        return response.json() as Ledstrip;
      });
  }

  public deleteLedstrip(id: string, controller: string): Promise<Ledstrip> {
    return this.http.delete(
      this.serverUrlLedstrips + id,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.getLedstrips(controller).then(ledstrips => {
          this.ledstrips = ledstrips;
          this.ledstripsChanged.next(this.ledstrips.slice());
        });
        return response.json() as Ledstrip;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public updateLedstrip(id: string, ledstrip: Ledstrip): Promise<number> {
    return this.http.put(
      this.serverUrlLedstrips + id,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.getLedstrips(this.controller._id).then(ledstrips => {
          this.ledstrips = ledstrips;
          this.ledstripsChanged.next(this.ledstrips.slice());
        });
        return response.json() as number;
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
