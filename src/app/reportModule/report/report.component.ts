import { ContentChild, Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Column } from '../classes/field';
import _ from 'lodash';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() columns: Array<Column> = [];
  @ContentChild(TemplateRef) itemTemplate;
  //  @Input() filters: Array<Filter> = [];
  @Input() set data(value : Array<object>) {
    this.collection = _.cloneDeep(value);
    this.handleCollectionChange();
  };

  //declaration
  collection: Array<Object> = [];
  isTabularReport:boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.isTabularReport = !this.itemTemplate;
  }

  handleCollectionChange() {
    if (this.isTabularReport) {
      if (_.isEmpty(this.columns) && !_.isEmpty(this.collection) && this.collection[0]) {
        var id = 1;
        _.forEach(this.collection[0], (value, propName) => {
          let column = new Column(propName, propName);
          column.id = id++;
          this.columns.push(column);
        });
      }
      else {
        console.log("Requires to have columns");
      }
  }
}

}
