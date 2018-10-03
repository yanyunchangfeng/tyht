import { Component, OnInit ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit ,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked{
  constructor() { }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    console.log('子组件投影内容被加载完成')
  }
  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完成')
  }
  ngAfterViewInit(): void {
    console.log('子组件视图加载完成')
  }
  ngAfterViewChecked(): void {
    console.log('子组件视图变更检测完成')
  }
}
