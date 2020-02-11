import { Component, OnInit } from '@angular/core';
import { SwitchesService } from '../../../services/switches.service';
import { Switch } from '../../../models/switch.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  switches: Switch[];

  constructor(private service: SwitchesService) { }

  ngOnInit() {
    this.service.getSwitches()
      .then(switches => {
        this.switches = switches
        console.log(switches);
      })
      .catch(err => console.log(err));

    this.service.switchesChanged.subscribe(switches => {
      this.switches = switches;
    });
  }
}
