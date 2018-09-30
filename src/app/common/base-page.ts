import {MessageService} from "primeng/api"
export class BasePage{
  constructor(public messageService:MessageService){

  }
  alert(type='success',msg){
     this.messageService.add({severity:type, summary:'Error Message', detail:msg})
  }
  handleError(err){
    if(err['ok'] === false){
      this.alert('error',err['message']);
      return
    }
    this.alert('error',err['message']);
  }
}
