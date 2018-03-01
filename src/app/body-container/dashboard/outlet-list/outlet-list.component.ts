import { Component, OnInit } from '@angular/core';
import {OutletsService} from '../../../services/outlets.service';
import {Outlet} from '../../../models/outlet.model';

@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css']
})
export class OutletListComponent implements OnInit {
  private outlets: Outlet[];

  constructor(private service: OutletsService) { }

  ngOnInit() {
    this.service.getOutlets()
      .then(outlets => this.outlets = outlets)
      .catch(err => console.log(err));
  }

}
