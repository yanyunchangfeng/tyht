import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {LoginService} from "./login.service"
import {Router} from "@angular/router";
import {BasePage} from "../common/base-page";
import {ConfirmationService, MessageService} from "primeng/api";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasePage implements OnInit {
  loginForm:FormGroup;
  constructor(
    private loginService:LoginService,
    public messageService:MessageService,
    public confirmationService:ConfirmationService,
    private router:Router,
    private fb:FormBuilder
  ) {
    super(messageService,confirmationService);
    this.loginForm = fb.group({
      'name':['',[Validators.required,Validators.minLength(5)]],
      'password':['',[Validators.required,Validators.minLength(6)]]
    })
  }
  ngOnInit() {

  }
  doLogin(){
    this.loginService.login(this.loginForm.value).subscribe(()=>{
           if(this.loginService.isLoggedIn()){
             this.router.navigate([this.loginService.redirectUrl?this.loginService.redirectUrl:'/']);
           }
    },(err:Error)=>{
         this.handleError(err)
    })
  }
}
