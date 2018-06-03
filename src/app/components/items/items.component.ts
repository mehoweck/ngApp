import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { ItemInterface } from '../../shared/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsConfig: any[] = [
    { key: 'title' },
    { key: 'imgSrc', type: 'image' },
    { key: 'category', type: 'italic' },
    { key: 'price', type: 'input' }
  ];

  itemsData: any[];
  itemsCount: number;

  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 5,
    currentPage: 1
  });
  newItem: Subject<any> = new Subject();

  constructor(private itemsService: ItemsService) {
    this.fetchItems();
    this.filters.subscribe((value) => {
      this.fetchItems();
    });

    this.newItem.subscribe((value) => {
      this.itemsService.add(value).subscribe(() => {
        this.fetchItems();
      });
    });
  }

  updateFilters(key, value) {
    console.log('UPDATE:' + value);
    // debugger;
    this.filters.next({
      ...this.filters.getValue(),
      [key]: value
    });
  }

  fetchItems() {
    this.itemsService.fetch(this.filters.getValue())
      .subscribe((resp) => {
        this.itemsData = resp.data;
        this.itemsCount = resp.total;
      });
  }

  ngOnInit() {
  }

  onRemoveItem(id) {
    console.log(id);
    this.itemsService.remove(id)
      .subscribe((resp) => {
        console.log('REMOVE!');
        this.fetchItems();
      });
  }

}
