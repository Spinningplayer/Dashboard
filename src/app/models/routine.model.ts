import { Task } from './task.model';

export class Routine {
  public _id: string;
  public name: string;
  public tasks: [Task];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
