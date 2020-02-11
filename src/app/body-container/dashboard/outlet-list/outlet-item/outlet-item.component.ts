import {Component, Input, OnInit} from '@angular/core';
import {Outlet} from '../../../../models/outlet.model';
import {OutletsService} from '../../../../services/outlets.service';
import { Switch } from '../../../../models/switch.model';
import { RoutinesService } from '../../../../services/routines.service';
import { SwitchesService } from '../../../../services/switches.service';

@Component({
  selector: '[app-outlet-item]',
  templateUrl: './outlet-item.component.html',
  styleUrls: ['./outlet-item.component.css']
})
export class OutletItemComponent implements OnInit {
  @Input() switchO: Switch;

  constructor(private service: RoutinesService, private switchSerivce: SwitchesService) { }

  ngOnInit() {
  }

  switch() {
    this.service.executeRoutine(this.switchO.state ? this.switchO.offRoutine._id : this.switchO.offRoutine._id)
      .then(response => {
        console.log(response);

        this.switchO.state = !this.switchO.state;
        this.switchSerivce.updateSwitch(this.switchO._id, this.switchO)
        .then(response => {
          
        }).catch(err => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      });
  }

}
