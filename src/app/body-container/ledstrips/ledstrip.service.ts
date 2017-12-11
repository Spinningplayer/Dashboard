import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {env} from '../../environments/env';
import {Ledstrip} from '../../models/ledstrip.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LedstripService {
  public ledstripsChanged = new Subject<Ledstrip[]>();
  public ledstripsSelected = new Subject<Ledstrip>();

  private serverUrlLedstrips = env.serverUrl + '/ledstrips/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private ledstrips: Ledstrip[] = [];

  constructor(private http: Http) { }

  public getLedstrips(): Promise<Ledstrip[]> {
    return this.http.get(
      this.serverUrlLedstrips,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.ledstrips = response.json();
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
        this.getLedstrips().then(ledstrips => {
          this.ledstrips = ledstrips;

        })
        return response.json() as Ledstrip;
      });
  }

  public deleteLedstrip(id: number): Promise<Ledstrip> {
    return this.http.delete(
      this.serverUrlLedstrips + id,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        this.getLedstrips().then(ledstrips => {
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
        this.getLedstrips().then(ledstrips => {
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
