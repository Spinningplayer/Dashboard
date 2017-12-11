import {Ledstrip} from './ledstrip.model';

export class Controller {
  public _id: string;
  public name: string;
  public address: string;
  public ledstrips: [Ledstrip];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
