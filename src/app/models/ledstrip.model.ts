import {Color} from './color.model';

export class Ledstrip {
  public _id: string;
  public name: string;
  public address: number;
  public color: Color;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
