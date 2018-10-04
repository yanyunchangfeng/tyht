import {MessageService} from "primeng/api";
import {ConfirmationService} from "primeng/api";
export class BasePage{
  constructor(
    public messageService:MessageService,
    public confirmationService:ConfirmationService
  ){
  }
  alert(type='success',summary='Error Message',msg){
     this.messageService.add({severity:type, summary:summary, detail:msg})
  }
  handleError(err){
    if(err['ok'] === false){
      this.alert('error','ErrorMessage',err['message']);
      return
    }
    this.alert('error','ErrorMessage',err['message']);
  }
  confirm(msg,acccallback?,rejcallback?){
    this.confirmationService.confirm({
     message:msg,
     accept:()=>{
       if(acccallback&&typeof acccallback =='function'){
         acccallback()
       }
     },
     reject:()=>{
       if(rejcallback&&typeof rejcallback =='function'){
         rejcallback()
       }
     }
   })
  }
}
