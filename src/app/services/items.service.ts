import { Injectable } from '@angular/core';
import { HttpServiceInterface } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../shared/settings';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceInterface {

  constructor(private http: HttpClient) { }

  fetch(params?: any): Observable<any> {
    console.log('PARAMS:', params);
    return this.http.get(Settings.ITEMS_END_POINT, { params });
  }
  add(item: any): Observable<any> {
    return this.http.post(Settings.ITEMS_END_POINT, item);
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: any): Observable<any> {
    return this.http.delete(Settings.ITEMS_END_POINT + '/' + id);
  }

}
