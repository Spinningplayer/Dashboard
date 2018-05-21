export class Task {
  public _id: string;
  public type: string;
  public command: string;
  public sleepTime: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
