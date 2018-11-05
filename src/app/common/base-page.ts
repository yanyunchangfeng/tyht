
// import {DialogService} from "xxddialog/components/index";
import{DialogService} from "../UIcomponent/dialog/dialog.service";
export class BasePage{
  loadingInstance:any;
  constructor(public dialogService:DialogService){}
  alert(msg){
    this.dialogService.confirm({
      message: msg,
      header: 'ok',
      okVisible: false,
      offVisible: false,
      delay: 1500
    });
  }
  warn(msg) {
    this.dialogService.confirm({
      message: msg,
      header: 'warning',
      okVisible: false,
      offVisible: false,
      delay: 1500
    });
  }
  loading(msg) {
    this.loadingInstance = this.dialogService.confirm({
      message: msg,
      header: 'waiting',
      okVisible: false,
      offVisible: false,
    });
  }
  unloading() {
    if (this.loadingInstance) {
      this.loadingInstance.close();
    }
  }
  handleError(err){
    if(err['ok'] === false){
      this.warn(err['message']);
      return
    }
    this.warn(err['message']);
  }
  confirm(msg,acceptcbk?,rejectcbk?){
    this.dialogService.confirm({
     message: msg,
     header: 'warning',
     accept: () => {
       if (acceptcbk && typeof acceptcbk === 'function') {
        acceptcbk();
       }
     },
     reject: () => {
       if (rejectcbk && typeof rejectcbk === 'function' ) {
        rejectcbk();
       }
     }
   });
  }
}
