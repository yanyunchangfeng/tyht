import {Component, Input, OnInit} from '@angular/core';
// import {DialogService} from "xxddialog/components/dialog.service"
import {DialogService} from "../../UIcomponent/dialog/dialog.service";

@Component({
  selector: 'app-diademo',
  templateUrl: './diademo.component.html',
  styleUrls: ['./diademo.component.scss']
})
export class DiademoComponent implements OnInit {
  @Input() styleClass:string = 'waiting'
  constructor(private dialog:DialogService) { }
  ngOnInit() {
    this.dialog.confirm({message:'ndfsdfsdf'})
  }
}
