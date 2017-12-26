export class Outlet {
  public _id: number;
  public name: string;
  public number: number;
  public state: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
