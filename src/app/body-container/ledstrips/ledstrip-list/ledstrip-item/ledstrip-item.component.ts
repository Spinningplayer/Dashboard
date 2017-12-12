import {Component, Input, OnInit} from '@angular/core';
import {Ledstrip} from '../../../../models/ledstrip.model';
import {LedstripService} from '../../ledstrip.service';

@Component({
  selector: '[app-ledstrip-item]',
  templateUrl: './ledstrip-item.component.html',
  styleUrls: ['./ledstrip-item.component.css']
})
export class LedstripItemComponent implements OnInit {
  @Input() strip: Ledstrip;
  constructor(private service: LedstripService) { }

  ngOnInit() {

  }

  edit() {
    this.service.selectLedstrip(this.strip);
  }

  delete() {
    this.service.deleteLedstrip(this.strip._id).then(
      response => {
        console.log('ledstrip deleted ' + response);
      }
    );
  }

}
