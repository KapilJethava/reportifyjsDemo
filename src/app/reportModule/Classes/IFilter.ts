export interface IFilter {
  id:number;
  propName: string;
  caption: string;
  visible: boolean;
  values: Array<any>;
  selected: Array<any>;
}
