import {Injectable} from '@angular/core';
import {env} from '../../environments/env';
import {Http, Headers} from '@angular/http';
import {Server} from '../../models/server.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ServerService {
  serversChanged = new Subject<Server[]>();
  serverSelected = new Subject<Server>();

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = env.serverUrl + '/servers/';
  private servers: Server[] = [];
  public selectedService: Server;

  constructor(private http: Http) {}

  public selectServer(server: Server) {
    this.serverSelected.next(server);
  }

  public getServers(): Promise<Server[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json() as Server[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public addServer(server: Server): Promise<Server> {
    console.log('create server: ' + server);
    return this.http.post(
        this.serverUrl,
        JSON.stringify(server),
        {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getServers().then(servers => {
          this.servers = servers;
          this.serversChanged.next(this.servers.slice());
        });
        return response.json() as Server;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public updateServer(server: Server, id: number): Promise<Server> {
    return this.http.put(
        this.serverUrl + id,
        JSON.stringify(server),
        {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getServers().then(servers => {
          this.servers = servers;
          this.serversChanged.next(this.servers.slice());
        });
        return response.json() as Server;
      })
      .catch(error => {
      return this.handleError(error);
    });
  }

  public deleteServer(id: number): Promise<number> {
    return this.http.delete(
      this.serverUrl + id,
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.getServers().then(servers => {
          this.servers = servers;
          this.serversChanged.next(this.servers.slice());
        });
        return response.json() as number;
      }).catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}

