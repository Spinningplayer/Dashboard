export class Server {
  public id: number;
  public name: string;
  public address: string;
  public ram: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
