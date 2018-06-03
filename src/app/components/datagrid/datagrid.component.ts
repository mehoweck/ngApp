import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  @Input() config: any[];
  @Input() data: any[];
  @Output() removeEvent = new EventEmitter();

  constructor() { }

  remove(id) {
    this.removeEvent.emit(id);
  }

  ngOnInit() {
  }

}
