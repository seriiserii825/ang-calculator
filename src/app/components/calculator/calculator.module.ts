import {NgModule} from '@angular/core';
import {CalculatorComponent} from './calculator.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [FormsModule, BrowserModule],
  exports: [CalculatorComponent]
})
export class CalculatorModule {}
