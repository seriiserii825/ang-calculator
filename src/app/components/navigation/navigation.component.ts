import { Component } from '@angular/core';
import {Enavigation} from '../../../enum/Enavigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  Enavigation = Enavigation;
}
