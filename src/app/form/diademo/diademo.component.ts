import {Component, Input, OnInit} from '@angular/core';
// import {DialogService} from "../../UIcomponent/dialog/dialog.service";
import {DialogService} from "xxddialog/components/index"
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
        message:'确定要删除吗?',
        header:'warning',
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
