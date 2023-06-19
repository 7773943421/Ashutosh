import { Component, OnInit } from '@angular/core';
import { UtilityservicesService } from '../utilityservices.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
products:{};
  constructor(private _utilityServ:UtilityservicesService) { }

  ngOnInit() {
    this.products=this._utilityServ.product
  }

}
