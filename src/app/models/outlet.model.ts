import {Routine} from './routine.model';

export class Outlet {
  public _id: number;
  public name: string;
  public state: boolean;
  public turnOn: Routine;
  public turnOff: Routine;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
