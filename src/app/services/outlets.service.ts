import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {env} from '../environments/env';
import {Outlet} from '../models/outlet.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OutletsService {
  public outletsChanged = new Subject<Outlet[]>();
  public outletSelected = new Subject<Outlet>();

  private headers = new Headers({'content-type': 'application/json'})
  private url = env.serverUrl + '/outlets/';
  private outlets: Outlet[];

  constructor(private http: Http) { }

  public selectOutlet(outlet: Outlet) {
    this.outletSelected.next(outlet);
  }

  public getOutlets(): Promise<Outlet[]> {
    return this.http.get(
      this.url,
      {headers: this.headers})
      .toPromise()
      .then(outlets => {
        return outlets.json() as Outlet[];
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public getOutlet(id: number): Promise<Outlet> {
    return this.http.get(
      this.url + id,
      {headers: this.headers})
      .toPromise()
      .then(outlet => {
        return outlet.json() as Outlet;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public addOutlet(outlet: Outlet): Promise<Outlet> {
    outlet.state = false;
    return this.http.post(
      this.url,
      JSON.stringify(outlet),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getOutlets().then(outlets => {
            this.outlets = outlets;
            this.outletsChanged.next(this.outlets.slice());
          });
        return response.json() as Outlet;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public updateOutlet(id: number, outlet: Outlet): Promise<Outlet> {
    return this.http.put(
      this.url + id,
      JSON.stringify(outlet),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getOutlets().then(outlets => {
          this.outlets = outlets;
          this.outletsChanged.next(this.outlets.slice());
        });
        return response.json() as Outlet;
      }).catch(err => {
        return this.handleError(err);
      });
  }

  public deleteOutlet(id: number): Promise<any> {
    return this.http.delete(
      this.url + id,
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getOutlets().then(outlets => {
          this.outlets = outlets;
          this.outletsChanged.next(this.outlets.slice());
        });
        return true;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public switch(id: number, outlet: Outlet): Promise<any> {
    return this.http.put(
      this.url + 'switch/' + id,
      JSON.stringify(outlet),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getOutlets().then(outlets => {
          this.outlets = outlets;
          this.outletsChanged.next(this.outlets.slice());
        });
        return response;
      })
      .catch(err => {
        this.handleError(err);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('Outlets');
    return Promise.reject(error.message || error);
  }
}
