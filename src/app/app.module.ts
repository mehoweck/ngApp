import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AuthComponent } from './components/auth/auth.component';
import { XHRInterceptor } from './shared/xhr-interceptor';
import { AddItemComponent } from './components/add-item/add-item.component';
import { MyModule } from './my/my.module';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterComponent,
    SearchComponent,
    DatagridComponent,
    WorkersComponent,
    AuthComponent,
    AddItemComponent,
    MapToIterablePipe
  ],
  imports: [
    MyModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'items', component: ItemsComponent },
      { path: 'registers', component: RegisterComponent },
      { path: 'workers', component: WorkersComponent }
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XHRInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
