import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorModule} from './components/calculator/calculator.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
