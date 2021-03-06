import { Component, OnInit } from '@angular/core';
import {LedstripControllerService} from '../ledstrip-service';
import {Ledstrip} from '../../../models/ledstrip.model';
import {ControllerService} from '../../ledstrips/controller.service';
import {LedstripService} from '../../ledstrips/ledstrip.service';
import {Controller} from '../../../models/Controller.model';
import {Color} from '../../../models/color.model';

@Component({
  selector: 'app-ledstrip-controller',
  templateUrl: './ledstrip-controller.component.html',
  styleUrls: ['./ledstrip-controller.component.css']
})
export class LedstripControllerComponent implements OnInit {
  red = 128;
  green = 128;
  blue = 128;
  controllers: Controller[] = [];
  ledstrips: Ledstrip[] = [];
  selectedController: Controller;
  selectedLedstrip: Ledstrip;
  selectColor = false;

  constructor(private ledstripController: LedstripControllerService,
              private controllerService: ControllerService,
              private ledStripService: LedstripService) { }

  ngOnInit() {
    this.controllerService.getControllers()
      .then(controllers => {
        this.controllers = controllers;
        this.selectedController = this.controllers[0];
        this.selectController();
      })
      .catch(error => console.log(error));
  }

  change() {

    const color = new Color(this.red, this.green, this.blue);

    this.ledstripController.sendMessage(color);
    this.selectedLedstrip.color = color;
    this.ledStripService.updateLedstrip(this.selectedController._id, this.selectedLedstrip)
      .then(result => {
      });
  }

  selectController() {
    this.ledstripController.setController(this.selectedController);
    this.ledStripService.getLedstrips(this.selectedController._id)
      .then(ledstrips => {
        this.ledstrips = ledstrips;
        this.selectedLedstrip = this.ledstrips[0];
        this.selectLedstrip();
        if (this.ledstrips[0].color != null) {
          this.red = this.ledstrips[0].color.red;
          this.green = this.ledstrips[0].color.green;
          this.blue = this.ledstrips[0].color.blue;
        }
      })
      .catch(error => console.log(error));
  }

  selectLedstrip() {
    this.selectColor = true;
    this.ledstripController.setLedstrip(this.selectedLedstrip);
  }

}
