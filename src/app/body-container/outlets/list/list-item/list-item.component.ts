import {Component, Input, OnInit} from '@angular/core';
import {OutletsService} from '../../../../services/outlets.service';
import { Switch } from '../../../../models/switch.model';
import { SwitchesService } from '../../../../services/switches.service';

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() switch: Switch;

  constructor(private service: SwitchesService) { }

  ngOnInit() {
    console.log(this.switch);
  }

  selectOutlet() {
    this.service.selectSwitch(this.switch);
  }

  deleteOutlet() {
    this.service.deleteSwitch(this.switch._id)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

}
