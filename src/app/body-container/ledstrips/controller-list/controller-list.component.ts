import { Component, OnInit } from '@angular/core';
import {ControllerService} from '../controller.service';
import {Controller} from '../../../models/Controller.model';

@Component({
  selector: 'app-controller-list',
  templateUrl: './controller-list.component.html',
  styleUrls: ['./controller-list.component.css']
})
export class ControllerListComponent implements OnInit {

  constructor(private controllerService: ControllerService) { }
  controllers: Controller[] = [];

  ngOnInit() {
    this.controllerService.getControllers()
      .then(controllers => {
        this.controllers = controllers;
      });
    this.controllerService.controllersChanged.subscribe(controllers => {
      this.controllers = controllers;
    });
  }

  select(controller: Controller) {
    this.controllerService.selectController(controller);
  }
}
