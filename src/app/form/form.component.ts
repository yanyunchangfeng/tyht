import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {phoneValidator,phoneAsyncValidator,equalValidator} from "../validator/validators"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myform:FormGroup;
  constructor( fb:FormBuilder) {
   this.myform= fb.group({
      phone:['',phoneValidator,phoneAsyncValidator],
      startTime:[''],
      endTime:[''],
      email:['',[Validators.required,Validators.email]],
      passwordsGroup:fb.group({
        password:['',Validators.minLength(6)],
        pconfirm:['']
      },{validator:equalValidator})
    })
  }

  ngOnInit() {
    console.log(this.myform)
  }
  submit({value,valid},ev:Event){
    console.log(this.myform)
    console.log(value,valid)
  }
}
