import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upimg',
  templateUrl: './upimg.component.html',
  styleUrls: ['./upimg.component.scss']
})
export class UpimgComponent implements OnInit {
  @ViewChild('file') upfile :ElementRef;
  src;
  constructor() { }

  ngOnInit() {
  }
  imageUpload(){
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.upfile.nativeElement.files[0]);
    fileReader.onload=(e)=>{
      this.src=e.target['result'];
      console.log(e.target['result'])
    }
  }

}
