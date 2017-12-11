import {Component, Input, OnInit} from '@angular/core';
import {Ledstrip} from '../../../../models/ledstrip.model';

@Component({
  selector: '[app-ledstrip-item]',
  templateUrl: './ledstrip-item.component.html',
  styleUrls: ['./ledstrip-item.component.css']
})
export class LedstripItemComponent implements OnInit {
  @Input() strip: Ledstrip;
  constructor() { }

  ngOnInit() {
  }

}
