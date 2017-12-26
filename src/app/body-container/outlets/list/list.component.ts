import { Component, OnInit } from '@angular/core';
import {OutletsService} from '../../../services/outlets.service';
import {Outlet} from '../../../models/outlet.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  outlets: Outlet[];

  constructor(private service: OutletsService) { }

  ngOnInit() {
    this.service.getOutlets()
      .then(outlets => this.outlets = outlets)
      .catch(err => console.log(err));

    this.service.outletsChanged.subscribe(outlets => {
      this.outlets = outlets;
    });
  }
}
