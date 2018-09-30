import {Directive, ElementRef, Input,HostListener,OnInit,OnDestroy,OnChanges} from '@angular/core';
import * as echarts from "echarts";
@Directive({
  selector: 'echart'
})
export class EchartDirective implements OnInit, OnDestroy, OnChanges{
  @Input('graphOpt') graphOpt:any;
  echartsInstance:any;//存储echart实例;
  constructor(private el:ElementRef) { }
  ngOnInit(){
    this.echartsInstance = echarts.init(this.el.nativeElement);
    this.setOpt();
  }
  setOpt(){
    if(this.echartsInstance){
      this.echartsInstance.setOption(this.graphOpt);
      this.echartsInstance.resize();
      // this.echartsInstance.dispatchAction({
      //   type:'restore'
      // })
    }
  }
  ngOnChanges(){
    this.setOpt();
  }
  @HostListener('window:resize',['$event'])
  onResize(e:Event){
    setTimeout(()=>{
      this.setOpt();
    },100)
  }
  ngOnDestroy(){
    if(this.echartsInstance){
      this.echartsInstance.dispose();
      this.echartsInstance = null;
    }
  }
}
