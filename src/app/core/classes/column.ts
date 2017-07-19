export class Column {
  public ID: number;
  public PropertyName: string;
  public Caption: string;
  public Visible: boolean;
  constructor(id, pName, caption, visible = true) {
    this.ID = id;
    this.PropertyName = pName;
    this.Caption = caption;
    this.Visible = visible;
  }
}
