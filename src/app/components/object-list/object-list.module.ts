import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjectListComponent} from './object-list.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ObjectListComponent],
  exports: [ObjectListComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ObjectListModule { }
