import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrl: './object-item.component.scss'
})
export class ObjectItemComponent implements OnInit {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    console.log("in class");
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'), "this.route.snapshot.paramMap.get('id')");
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '0';
    } else {
      this.id = '0';
    }
    console.log(this.id, "this.id");
  }
}
