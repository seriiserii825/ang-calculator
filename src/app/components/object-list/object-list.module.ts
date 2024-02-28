import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjectListComponent} from './object-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
import {ObjectItemComponent} from '../object-item/object-item.component';

@NgModule({
  declarations: [ObjectListComponent, ObjectItemComponent],
  exports: [ObjectListComponent, ObjectItemComponent],
  imports: [
    RouterLink,
    CommonModule,
    BrowserModule
  ]
})
export class ObjectListModule { }
