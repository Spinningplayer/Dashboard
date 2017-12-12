export class Stats {
  public serverName: string;
  public cpuLoad: number;
  public ramUsage: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
