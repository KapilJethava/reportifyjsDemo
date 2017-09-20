export class Column {
  public id: number;
  public propName: string;
  public caption: string;

  public sortEnabled: boolean;
  public filterEnabled: boolean;
  public showColumn: boolean;

  public autoPopulateFilters: boolean;

  public values: Array<any>;
  public selected: Array<any>;

  constructor(
    pName,
    caption,
    showColumn = true,
    sortEnabled = false,
    filterEnabled = false,
    autoPopulateFilters = true,
    values = [],
    selected = []
  ) {
    this.propName = pName;
    this.caption = caption;
    this.showColumn = showColumn;
    this.filterEnabled = filterEnabled;
    this.sortEnabled = sortEnabled;
    this.autoPopulateFilters = autoPopulateFilters;
    this.values = values;
    this.selected = selected;
  }
}
