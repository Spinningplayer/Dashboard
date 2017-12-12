import { Component, OnInit } from '@angular/core';
import {LedstripService} from '../ledstrip.service';
import {Ledstrip} from '../../../models/ledstrip.model';
import {ControllerService} from '../controller.service';
import {Controller} from '../../../models/Controller.model';

@Component({
  selector: 'app-ledstrip-list',
  templateUrl: './ledstrip-list.component.html',
  styleUrls: ['./ledstrip-list.component.css']
})
export class LedstripListComponent implements OnInit {
  ledstrips: Ledstrip[] = [];

  constructor(
    private stripService: LedstripService,
    private controllersService: ControllerService) { }

  ngOnInit() {
    this.controllersService.controllersSelected
      .subscribe(controller => {
        console.log(controller);
        this.stripService.getLedstrips(controller._id)
          .then(ledstrips => {
            this.ledstrips = ledstrips;
          });
      });
    this.stripService.ledstripsChanged
      .subscribe(strips => {
        this.ledstrips = strips;
      });
  }
}
