import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() data: Array<object> = [];
  //@Input()

  constructor() { }

  ngOnInit() {
  }

}
