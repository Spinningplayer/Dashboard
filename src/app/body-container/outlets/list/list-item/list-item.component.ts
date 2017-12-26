import {Component, Input, OnInit} from '@angular/core';
import {Outlet} from '../../../../models/outlet.model';
import {OutletsService} from '../../../../services/outlets.service';

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() outlet: Outlet;

  constructor(private service: OutletsService) { }

  ngOnInit() {
  }

  selectOutlet() {
    this.service.selectOutlet(this.outlet);
  }

  deleteOutlet() {
    this.service.deleteOutlet(this.outlet._id)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

}
