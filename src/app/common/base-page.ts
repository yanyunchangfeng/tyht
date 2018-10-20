import {MessageService} from "primeng/api";
// import {DialogService} from "xxddialog/components/index";
// import{DialogService} from "../UIcomponent/dialog/dialog.service";
export class BasePage{
  constructor(
    public messageService:MessageService,
    // public dialogService:DialogService
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
  //   this.dialogService.confirm({
  //    message:msg,
  //    header:'warning',
  //    accept:()=>{
  //      if(acccallback&&typeof acccallback =='function'){
  //        acccallback()
  //      }
  //    },
  //    reject:()=>{
  //      if(rejcallback&&typeof rejcallback =='function'){
  //        rejcallback()
  //      }
  //    }
  //  })
  }
}
