import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {LoginService} from "./login.service"
import {Router} from "@angular/router";
import {BasePage} from "../common/base-page";
import {DialogService} from "xxddialog/components/index";
// import{DialogService} from "../UIcomponent/dialog/dialog.service";
import {FLYIN} from "../animation/fly-in"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[FLYIN]
})
export class LoginComponent extends BasePage implements OnInit {
  loginForm:FormGroup;
  constructor(
    private loginService:LoginService,
    public dialogService:DialogService,
    private router:Router,
    private fb:FormBuilder
  ) {
    super(dialogService);
    this.loginForm = fb.group({
      'name':['',[Validators.required,Validators.minLength(5)]],
      'password':['',[Validators.required,Validators.minLength(6)]]
    })
  }
  ngOnInit() {

  }
  doLogin(){
    this.loading('登录中...');
    this.loginService.login(this.loginForm.value).subscribe(()=>{
           this.unloading();
           if(this.loginService.isLoggedIn()){
             this.router.navigate([this.loginService.redirectUrl?this.loginService.redirectUrl:'/']);
           }
    },(err:Error)=>{
         this.unloading();
         this.handleError(err);
    })
  }
}
