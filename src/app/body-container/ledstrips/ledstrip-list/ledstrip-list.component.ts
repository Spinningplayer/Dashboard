import { Component, OnInit } from '@angular/core';
import {LedstripService} from '../ledstrip.service';
import {Ledstrip} from '../../../models/ledstrip.model';

@Component({
  selector: 'app-ledstrip-list',
  templateUrl: './ledstrip-list.component.html',
  styleUrls: ['./ledstrip-list.component.css']
})
export class LedstripListComponent implements OnInit {
  ledstrips: Ledstrip[] = [];

  constructor(private stripService: LedstripService) { }

  ngOnInit() {
    this.stripService.getLedstrips()
      .then(ledstrips => {
        this.ledstrips = ledstrips;
      })
    this.stripService.ledstripsChanged
      .subscribe(strips => {
        this.ledstrips = strips;
      });
  }
}
