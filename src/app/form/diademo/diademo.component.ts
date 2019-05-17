import {Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DialogService} from "../../UIcomponent/dialog/dialog.service";
// import {DialogService} from "xxddialog/components/index"
@Component({
  selector: 'app-diademo',
  templateUrl: './diademo.component.html',
  styleUrls:['./diademo.component.scss']
})
export class DiademoComponent implements OnInit {
  left = 0;
  top = 0;
  startX;
  startY;
  dropsrc = '';
  constructor(
    private dialog: DialogService,
    private si: DomSanitizer
    ) { }
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
        key:"1",
        offLabel: ``,
        accept:()=>{
              this.dialog.confirm({
                message:'已删除',
                header:'ok',
                okVisible:true,
                offVisible:false,
                okButton:'blue',
                offButton:'red',
                okLabel:``,
                key:"2",
                // delay:3000,
                offLabel: ``,
                accept:()=>{
                  this.dialog.confirm({
                    message:'正在拼命加载……',
                    header:'waiting',
                    okVisible:false,
                    offVisible:false,
                    okButton:'blue',
                    offButton:'green',
                    okLabel:``,
                    key:"3",
                    // delay:3000,
                    offLabel: ``,
                    accept:()=>{
    
                    },
                    reject:()=>{
    
                    }
                  })

                },
                reject:()=>{

                }
              })
        },
        reject:()=>{

        }
      });
  //  timer(3000).subscribe(val => dia.close());
  }
  @HostListener('document:dragover', ['$event'])
  documentonDragOver(e) {
  }
  onDragStart(ev:MouseEvent) {
     console.log(ev);
     this.startX  = ev.offsetX;// 刚要移动鼠标时相对于图片的偏移量
     this.startY  = ev.offsetY;
  }
  onDrag(ev: MouseEvent) {
          // this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          // this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
     let x = ev.pageX ; // 拖动在整个页面的坐标：
     let y = ev.pageY ;
     if ( x === 0 && y === 0) {return; }
     x -= this.startX;
     y -= this.startY;
     x -= 266;
     y -= 133;
     this.left = x;
     this.top = y;
  }
  onDragEnd(ev: MouseEvent) {
  }
  onDragEnter(ev: MouseEvent) {
  }
  onDragOver(ev:MouseEvent) {
    ev.preventDefault();
    // 阻止dragover触发默认时间dragleave
  }
  onDragLeave(ev:MouseEvent) {
    console.log('leave');
  }
  onDrop(ev: MouseEvent){
    console.log('drop');
    ev.preventDefault();
  }
  @HostListener('document:dragover', ['$event'])
  ondocumentDragOver(ev: MouseEvent) {
    // 阻止dragover的默认行为: 继续触发dragleave事件;

  }
  @HostListener('document:drop', ['$event'])
  ondocumentDrop(ev: MouseEvent) {
    // 阻止document的drop事件默认行为：在新窗口中打开拖进来的图片
     ev.preventDefault();

  }
  // 拖放的源对象-客户端的一张图片无法做事件绑定
  containerOnDragOver(ev: MouseEvent) {
    ev.preventDefault();
  }
  containerDrop(ev: DragEvent ) {
    ev.preventDefault();
    // 注意chrome里面的files.length：0，其实不是0!!
    const f0 = ev.dataTransfer.files[0];
    this.dropsrc = this.si.bypassSecurityTrustUrl(window.URL.createObjectURL(f0)) as any;
    // const reader = new FileReader();
    // reader.readAsDataURL(f0);
    // reader.onload = () => {
    //    this.dropsrc = reader.result as any;
    // };

  }
  accept(){
    alert('qer')
  }
  reject(){
    alert('qu')
  }
}
