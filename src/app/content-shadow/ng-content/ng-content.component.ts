import { Component, OnInit ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit ,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked{
  constructor() { }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    console.log('父组件投影内容加载完成');
  }
  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('父组件视图加载完成')
  }
  ngAfterViewChecked(): void {
    console.log('父组件视图变更检测完成')
  }
}
