import {MessageService} from "primeng/api"
export class BasePage{
  constructor(public messageService:MessageService){
  }
  alert(type='success',summary='Error Message',msg){
     this.messageService.add({severity:type, summary:summary, detail:msg})
  }
  handleError(err){
    if(err['ok'] === false){
      this.alert('error','',err['message']);
      return
    }
    this.alert('error','',err['message']);
  }
}
