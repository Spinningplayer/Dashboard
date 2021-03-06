import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {env} from '../environments/env';
import {Subject} from 'rxjs/Subject';
import {Routine} from '../models/routine.model';
import {Task} from '../models/task.model';

@Injectable()
export class RoutinesService {
  public routinesChanged = new Subject<Routine[]>();
  public routineSelected = new Subject<Routine>();

  private headers = new Headers({'content-type': 'application/json'});
  private rUrl = env.serverUrl + '/routines/';
  private tUrl = env.serverUrl + '/tasks/';

  public routines: Routine[];

  constructor(private http: Http) { }

  public selectRoutine(routine: Routine) {
    this.routineSelected.next(routine);
  }

  public getRoutines(): Promise<Routine[]> {
    return this.http.get(
      this.rUrl,
      {headers: this.headers})
      .toPromise()
      .then(routines => {
        this.routines = routines.json();
        this.routinesChanged.next(this.routines.slice());
        return this.routines;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public getRoutine(id: number): Promise<Routine> {
    return this.http.get(
      this.rUrl + id,
      {headers: this.headers})
      .toPromise()
      .then(routine => {
        return routine.json() as Routine;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public addRoutine(routine: Routine): Promise<boolean> {
    return this.http.post(
      this.rUrl,
      routine,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return true;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public addTask(task: Task, id: string): Promise<boolean> {
    console.log(task, id);
    return this.http.post(
      this.tUrl + id,
      task,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return true;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public updateRoutine(routine: Routine): Promise<Routine> {
    return this.http.put(
      this.rUrl + routine._id,
      routine,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return routine;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public updateTask(task: Task): Promise<Task> {
    return this.http.put(
      this.tUrl + task._id,
      task,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return task;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public deleteRoutine(id: string): Promise<true> {
    return this.http.delete(
      this.rUrl + id,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return true;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public deleteTask(task: string, routine: string): Promise<true> {
    return this.http.delete(
      this.tUrl + routine + '/' + task,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        this.getRoutines()
          .then(() => {
            return true;
          })
          .catch(err => {
            return this.handleError(err);
          });
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  public executeRoutine(id: string): Promise<any> {
    return this.http.get(
      this.rUrl + 'execute/' + id,
      {headers: this.headers})
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('Routines');
    return Promise.reject(error.message || error);
  }

}
