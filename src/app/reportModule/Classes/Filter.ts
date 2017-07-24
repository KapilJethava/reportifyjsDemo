import { IFilter } from './IFilter';

export class Filter implements IFilter {
  public id: number;
  public propName: string;
  public caption: string;
  public visible: boolean;
  public values: Array<any>;
  public selected: Array<any>;
  constructor(pName, caption, visible = true) {
    this.propName = pName;
    this.caption = caption?caption:pName;
    this.visible = visible;
  }
}
