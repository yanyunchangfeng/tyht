import {Component, Input, OnInit} from '@angular/core';
import {DialogService} from "xxddialog/components/dialog.service"
// import {DialogService} from "../../UIcomponent/dialog/dialog.service";

@Component({
  selector: 'app-diademo',
  templateUrl: './diademo.component.html',
  styleUrls: ['./diademo.component.scss']
})
export class DiademoComponent implements OnInit {
  constructor(private dialog:DialogService) { }
  ngOnInit() {
    this.dialog.confirm(
      {
        message:'删除成功',
        header:'ok',
        okVisible:true,
        offVisible:true,
        okButton:'blue',
        offButton:'green',
        okLabel:``,
        offLabel: ``,
        accept:()=>{

        },
        reject:()=>{

        }
      }
    )
  }
}
