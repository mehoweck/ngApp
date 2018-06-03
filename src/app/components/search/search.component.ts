import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() controls: any[];
  @ViewChild('searchForm') form;

  @Input() filters: BehaviorSubject<any>;

  constructor() { }

  ngOnInit() {
    this.form
      .valueChanges
      .pipe( debounceTime(500) )
      .subscribe((value) => {
        this.filters.next({
          ...this.filters.getValue(),
          ...value
        });
      });
  }

}
