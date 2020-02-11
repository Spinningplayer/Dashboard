import { Component, OnInit } from '@angular/core';
import {OutletsService} from '../../../services/outlets.service';
import {Outlet} from '../../../models/outlet.model';
import { Switch } from '../../../models/switch.model';
import { SwitchesService } from '../../../services/switches.service';

@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css']
})
export class OutletListComponent implements OnInit {
  private switches: Switch[];

  constructor(private service: SwitchesService) { }

  ngOnInit() {
    this.service.getSwitches()
      .then(switches => this.switches = switches)
      .catch(err => console.log(err));
  }

}
