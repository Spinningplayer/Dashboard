import {Component, Input, OnInit} from '@angular/core';
import {Controller} from '../../../../models/Controller.model';
import {ControllerService} from '../../controller.service';

@Component({
  selector: '[app-controller-item]',
  templateUrl: './controller-item.component.html',
  styleUrls: ['./controller-item.component.css']
})
export class ControllerItemComponent implements OnInit {
  @Input() controller: Controller;

  constructor(private controllerService: ControllerService) { }

  ngOnInit() {
  }

  public delete() {
    this.controllerService.deleteController(this.controller._id)
      .then(result => {
        console.log('item deleted');
      });
  }

  public edit() {
    this.controllerService.selectController(this.controller);
  }

}
