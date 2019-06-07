import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BasePage} from "../../common/base-page";
// import {DialogService} from "xxddialog/components/index";
import{DialogService} from "../../UIcomponent/dialog/dialog.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-upimg',
  templateUrl: './upimg.component.html',
  styleUrls: ['./upimg.component.scss']
})
export class UpimgComponent extends BasePage implements  OnInit {
  @ViewChild('file',{static:true}) upfile :ElementRef;
  @ViewChild('view',{static:true}) view :ElementRef;
  src;
  files:File[];
  constructor(
    public dialogService:DialogService,
    public sanitizer: DomSanitizer
              ) {
    super(dialogService);
  }
  ngOnInit() {
    this.files = [];
  }
  imageUpload(event){
    /* fileReader
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.upfile.nativeElement.files[0]);
    fileReader.onload=(e)=>{
      this.src=e.target['result'];
      console.log(e.target['result'])
    }
    */
    let files = event.target.files;
    for(let i =0;i< files.length;i++){
      let file = files[i];
      if(!this.isFileSelected(file)){
        if(this.validate(file)){
          if(this.isImage(file)){
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
  }
  remove(event:Event,index:number){
    this.clearInputElement();
    this.files.splice(index,1)
  }
  clearInputElement(){
    if(this.upfile&&this.upfile.nativeElement){
      this.upfile.nativeElement.value = "";
    }
  }
  compressImage(image){
    console.log(image)
    const canvas = this.view.nativeElement;
    const ctx = canvas.getContext('2d');
    canvas.width = image.width/10;
    canvas.height = image.height/10;
    ctx.drawImage(image,100,100,image.width,image.height,0,0,canvas.width,canvas.height);
    const imgurl = canvas.toDataURL('image/jpeg',0.1);
  }
  isImage(file:File):boolean{
     return /^image\//.test(file.type);
  }
  validate(file:File):boolean{
     if(this.upfile.nativeElement.accept&&!this.isFileType(file)){
       this.warn('失效的文件内型'+file.name);
       return false
     }
     if(this.upfile.nativeElement.maxFileSize&&file.size>this.upfile.nativeElement.maxFileSize){
       this.warn('失效的文件大小'+ file.size);
       return false
     }
     return true
  }
  isFileSelected(file:File):boolean{
    for(let sFile of this.files){
      if((sFile.name+sFile.type+sFile.size)===(file.name + file.type+file.size)){
        return true;
      }
    }
    return false;
  }
  isFileType(file:File):boolean{
    let acceptableTypes = this.upfile.nativeElement.accept.split(',');
    for(let type of acceptableTypes){
      let acceptable = this.isWildcard(type)?this.getTypeClass(file.type)===this.getTypeClass(type):file.type==type
      if(acceptable){
        return true
      }
    }
    return false
  }
  isWildcard(fileType:string):boolean{
    return fileType.indexOf('*')!==-1
  }
  getTypeClass(fileType:string){
    return fileType.substring(0,fileType.indexOf('/'));
  }
}
