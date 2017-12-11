export class Ledstrip {
  public _id: string;
  public name: string;
  public address: number;
  public color: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
