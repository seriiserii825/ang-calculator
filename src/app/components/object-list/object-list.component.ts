import {Component} from '@angular/core';
import {Enavigation} from '../../../enum/Enavigation';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss'
})

export class ObjectListComponent {
  public object_list: IObject[] = MyObjectList;
  public ENavigation = Enavigation;
}

export const MyObjectList: IObject[] = [
  {
    id: 1,
    title: 'Object 1',
    content: 'Contact 1'
  },
  {
    id: 2,
    title: 'Object 2',
    content: 'Contact 2'
  },
  {
    id: 3,
    title: 'Object 3',
    content: 'Contact 3'
  }
];

export interface IObject {
  id: number;
  title: string;
  content: string;
}
