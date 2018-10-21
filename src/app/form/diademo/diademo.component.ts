import {Component, Input, OnInit} from '@angular/core';
// import {DialogService} from "../../UIcomponent/dialog/dialog.service";
import {DialogService} from "xxddialog/components/index"
import {timer} from "rxjs";
@Component({
  selector: 'app-diademo',
  templateUrl: './diademo.component.html',
  styleUrls: ['./diademo.component.scss']
})
export class DiademoComponent implements OnInit {
  constructor(private dialog:DialogService) { }
  ngOnInit() {
   let  dia= this.dialog.confirm(
      {
        message:'确定要删除吗?',
        header:'warning',
        okVisible:true,
        offVisible:true,
        okButton:'blue',
        offButton:'green',
        okLabel:``,
        key:"1",
        offLabel: ``,
        accept:()=>{
              this.dialog.confirm({
                message:'第二个弹框?',
                header:'warning',
                okVisible:true,
                offVisible:true,
                okButton:'blue',
                offButton:'green',
                okLabel:``,
                key:"2",
                delay:3000,
                offLabel: ``,
                accept:()=>{

                },
                reject:()=>{

                }
              })
        },
        reject:()=>{

        }
      }
    );
    // dia.close();
   timer(3000).subscribe(val => dia.close());
  }
}
