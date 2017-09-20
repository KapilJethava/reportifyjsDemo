// import { IFilter } from './IFilter';

export class Column {
  public id: number;
  public propName: string;
  public caption: string;
  public sortEnabled: boolean;
  public filterEnabled: boolean;
  public showColumnForThis:boolean;
  public values: Array<any>;
  public selected: Array<any>;
  constructor(pName, caption, visible = true) {
    this.propName = pName;
    this.caption = caption;
    this.showColumnForThis = visible;
  }
}

// export class Filter implements IFilter {
//   public id: number;
//   public propName: string;
//   public caption: string;
//   public visible: boolean;
//   public values: Array<any>;
//   public selected: Array<any>;
//   public test:string;
//   constructor(pName, caption, visible = true) {
//     this.propName = pName;
//     this.caption = caption?caption:pName;
//     this.visible = visible;
//   }
// }

// export class Sorter {

// }


// export interface IFilter {
//   id: number;
//   propName: string;
//   caption: string;
//   visible: boolean;
//   values: Array<any>;
//   selected: Array<any>;
// }
