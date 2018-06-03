import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponent } from './datagrid.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;
  let template: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    template = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create 2 rows', () => {
    component.data = [{title: 'tomato'}, {title: 'aubergine'}];
    component.config = [{key: 'title'}];
    fixture.detectChanges();

    expect(component).toBeTruthy();
    console.log(template.nativeElement);

    const rows = template.queryAll(By.css('tbody tr'));
    console.log('row:' + rows.length);

    expect(rows.length).toEqual(2);
  });
});
