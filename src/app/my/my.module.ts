import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetColorDirective } from './set-color';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SetColorDirective
  ],
  exports: [
    SetColorDirective
  ]
})
export class MyModule { }
