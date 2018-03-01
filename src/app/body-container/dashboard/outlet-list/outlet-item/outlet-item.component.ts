import {Component, Input, OnInit} from '@angular/core';
import {Outlet} from '../../../../models/outlet.model';
import {OutletsService} from '../../../../services/outlets.service';

@Component({
  selector: '[app-outlet-item]',
  templateUrl: './outlet-item.component.html',
  styleUrls: ['./outlet-item.component.css']
})
export class OutletItemComponent implements OnInit {
  @Input() outlet: Outlet;

  constructor(private service: OutletsService) { }

  ngOnInit() {
  }

  switch() {
    this.outlet.state = !this.outlet.state;

    this.service.switch(this.outlet._id, this.outlet)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
