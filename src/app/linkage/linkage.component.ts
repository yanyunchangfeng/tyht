import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkage',
  templateUrl: './linkage.component.html',
  styleUrls: ['./linkage.component.scss']
})
export class LinkageComponent implements OnInit {
  area;
  constructor() { }

  ngOnInit() {
    this.area = {"provinceName":{'name':"北京市",'code':"110000"},"cityName":{'name':'','code':''},"townName":{'name':'','code':''}};
  }
   changeArea(area){

   }
}
