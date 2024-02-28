import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {Enavigation} from '../enum/Enavigation';
import {ObjectListComponent} from './components/object-list/object-list.component';
import {ObjectItemComponent} from './components/object-item/object-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Enavigation.calculator,
    pathMatch: 'full'
  },
  {
    path: Enavigation.calculator,
    component: CalculatorComponent
  },
  {
    path: Enavigation.calculator,
    component: CalculatorComponent
  },
  {
    path: Enavigation.object_list,
    component: ObjectListComponent
  },
  {
    path: 'object-list/:id',
    component: ObjectItemComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
