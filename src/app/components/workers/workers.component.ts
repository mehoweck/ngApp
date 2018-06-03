import { Component, OnInit, Input } from '@angular/core';
import { WorkersService } from '../../services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  @Input() columnConfig: any[] = [
    {key: 'name'},
    {key: 'phone'}
  ];
  @Input() workersData: any[];

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.fetch()
      .subscribe((resp) => {
        // console.log('FETCHED!!!', JSON.stringify(resp));
        this.workersData = resp.data;
      });
  }

}
