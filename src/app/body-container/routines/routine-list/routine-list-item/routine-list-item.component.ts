import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-routine-list-item]',
  templateUrl: './routine-list-item.component.html',
  styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent implements OnInit {
  @Input() routine;

  constructor() { }

  ngOnInit() {
  }

}
