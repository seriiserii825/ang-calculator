import { Component } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss'
})

export class ObjectListComponent {

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
