import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as wangEditor from "wangeditor/release/wangEditor.js"
@Component({
  selector: 'app-wangeditor',
  templateUrl: './wangeditor.component.html',
  styleUrls: ['./wangeditor.component.scss']
})
export class WangeditorComponent implements OnInit,AfterViewInit {
  editor:any;
  constructor(private el:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    const editordom = this.el.nativeElement.querySelector('#editorElem');
    this.editor = new wangEditor(editordom);
    this.editor.create();
  }
}
