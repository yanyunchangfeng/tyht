import {
  AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, Input, NgModule,
  OnInit
} from '@angular/core';
import {animate, query, trigger,} from "@angular/animations"
import {Footer} from "./footer.component";
import {DialogService} from "./dialog.service";
import {Subscription} from "rxjs/index";
import {Dialog} from "./dialog";
import {CommonModule} from "@angular/common";
import {transition} from "@angular/animations";
import {style} from "@angular/animations";
import {stagger} from "@angular/animations";

@Component({
  selector: 'xxd-dialog',
  template:
  `
    <div class="g-dialog-container" *ngIf="visible" [@scale]>
      <div class="dialog-window">
        <div ngClass="dialog-header" [class]="styleClass"></div>
        <div class="dialog-content" [innerHTML]="message"></div>
        <div class="dialog-footer" *ngIf="footer">
          <ng-content select="xxd-footer"></ng-content>
        </div>
        <div class="dialog-footer" *ngIf="!footer">
          <button ngClass="red" (click)="accept()">{{okLabel}}</button>
          <button ngClass="green" (click)="reject()">{{offLabel}}</button>
        </div>
      </div>
    </div>
  
  `,
  styles: [`.g-dialog-container {
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center; }
  .g-dialog-container .dialog-window {
    /*width: 15rem;*/
    padding: 1rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.8);
     }
  .g-dialog-container .dialog-window .dialog-header {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center; }
  .g-dialog-container .dialog-window .dialog-header.ok:after {
    content: '';
    display: block;
    width: 30px;
    height: 10px;
    border: 2px solid #fff;
    border-width: 0 0 2px 2px;
    transform: rotate(-50deg); }
  .g-dialog-container .dialog-window .dialog-header.warning {
    transform: rotate(90deg); }
  .g-dialog-container .dialog-window .dialog-header.warning:before {
    content: '';
    display: block;
    width: 20px;
    height: 5px;
    background: #fff;
    margin-right: 5px; }
  .g-dialog-container .dialog-window .dialog-header.warning:after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff; }
  .g-dialog-container .dialog-window .dialog-header.waiting:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background: yellow;
    border-radius: 50%;
    animation: waiting1 0.8s infinite; }
  .g-dialog-container .dialog-window .dialog-header.waiting:after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    background: red;
    border-radius: 50%;
    animation: waiting2 0.8s infinite; }
  .g-dialog-container .dialog-window .dialog-content {
    padding: 1rem 1rem 0;
    text-align: center; }
  .g-dialog-container .dialog-window .dialog-footer {
    padding: 1rem 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center; }
  .g-dialog-container .dialog-window .dialog-footer button {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 0.8rem 1.8rem;
    margin: 0.3rem;
    text-shadow: #666 1px 1px;
    outline: none;
    border-radius: 5px;
    color: #eee; }
  .g-dialog-container .dialog-window .dialog-footer button.green {
    background-color: green; }
  .g-dialog-container .dialog-window .dialog-footer button.green:hover {
    background-color: #004d00; }
  .g-dialog-container .dialog-window .dialog-footer button.green:active {
    background-color: #00e600; }
  .g-dialog-container .dialog-window .dialog-footer button.red {
    background-color: red; }
  .g-dialog-container .dialog-window .dialog-footer button.red:hover {
    background-color: #cc0000; }
  .g-dialog-container .dialog-window .dialog-footer button.red:active {
    background-color: #ff6666; }
  .g-dialog-container .dialog-window .dialog-footer button.blue {
    background-color: #00ACD6; }
  .g-dialog-container .dialog-window .dialog-footer button.blue:hover {
    background-color: #0083a3; }
  .g-dialog-container .dialog-window .dialog-footer button.blue:active {
    background-color: #3dd9ff; }
  @keyframes waiting1 {
    0% {
      transform: translate(-5px 0); }
    50% {
      transform: translate(10px, 0); }
    100% {
      transform: translate(-5px, 0); } }
  @keyframes waiting2 {
    0% {
      transform: translate(5px, 0); }
    50% {
      transform: translate(-10px, 0); }
    100% {
      transform: translate(5px, 0); } }
  `],
  animations:[
    trigger('scale',[transition('*<=>*',[
       query(':enter',[
         style({transform:'scale(0,0)'}),
         stagger('3000ms',
         animate('50000ms',style({transform:'scale(1,1)'})))
       ],{optional:true}),
       query(':leave',[
          animate('100ms',style({opacity:0}))
      ],{optional:true})
    ])])
  ]
})
export class DialogComponent implements OnInit, AfterContentInit,AfterViewInit {

  @Input() styleClass = 'waiting';
  @Input() key;
  @Input() message = 'How are you';
  @Input() okLabel = '确定';
  @Input() offLabel = '取消';
  @Input() okVisible = true;
  @Input() offVisible = true;
  @Input() visible;
  dialog:Dialog;
  @ContentChild(Footer) footer;
  subscription:Subscription;
  constructor(private dialogService:DialogService) {
    this.subscription = dialogService.requireDialogSource$.subscribe(dialog=>{
      if(dialog.key===this.key){
        this.dialog = dialog;
        this.message = this.dialog.message||this.message;
        this.okLabel = this.dialog.okLabel||this.okLabel;
        this.offLabel = this.dialog.offLabel||this.offLabel;
        this.okVisible = this.dialog.okVisible||this.okVisible;
        this.offVisible = this.dialog.offVisible||this.offVisible;
        if(this.dialog.accept) {
          this.dialog.acceptEvent = new EventEmitter();
          this.dialog.acceptEvent.subscribe(this.dialog.accept);
        }

        if(this.dialog.reject) {
          this.dialog.rejectEvent = new EventEmitter();
          this.dialog.rejectEvent.subscribe(this.dialog.reject);
        }
        this.visible = true
      }
    })
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(this.footer);
  }
  ngAfterViewInit() {
    console.log(this.footer);
  }
  accept() {
    if(this.dialog.acceptEvent) {
      this.dialog.acceptEvent.emit();
    }

    this.hide();
    this.dialog = null;
  }

  reject() {
    if(this.dialog.rejectEvent) {
      this.dialog.rejectEvent.emit();
    }

    this.hide();
    this.dialog = null;
  }
  hide() {
    this.visible = false;
  }
}
@NgModule({
  imports:[CommonModule],
  declarations:[DialogComponent,Footer],
  exports:[DialogComponent,Footer]
})
export class DialogModule{

}
