import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Stats} from '../../../models/Stats.model';

@Injectable()
export class StatsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getStats(serverAddress: string): Promise<Stats> {
    const url = 'http://' + serverAddress + ':3001/stats';
    console.log(url);
    return this.http.get(
      url,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        return response.json() as Stats;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getGraphStats(serverAddress: string): Promise<Stats[]> {
    const url = 'http://' + serverAddress + ':3001/stats/graph';
    return this.http.get(
      url,
      {headers: this.headers}
    ).toPromise()
      .then(response => {
        return response.json() as Stats[];
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
