import { Component } from '@angular/core';
import {LedstripService} from './body-container/ledstrips/ledstrip.service';
import {ControllerService} from './body-container/ledstrips/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
