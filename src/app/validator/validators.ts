import {FormControl, FormGroup} from "@angular/forms";
import {of} from "rxjs/index";
import {delay} from "rxjs/internal/operators";
export function phoneValidator(control:FormControl ){
  let phoneReg = /^(\+86|0086)?1[34578]\d{9}$/;
  let valid = phoneReg.test(control.value);
  return valid ? null:{phone:{descxx:"手机格式不正确"}}
}
export function phoneAsyncValidator(control:FormControl ){
  let phoneReg = /^(\+86|0086)?1[34578]\d{9}$/;
  let valid = phoneReg.test(control.value);
  return of(valid ? null:{phone:{descxx:"手机格式不正确"}}).pipe(delay(5000));
}
export function equalValidator(group:FormGroup){
  let password:FormControl = group.get('password') as FormControl;
  let pconfirm:FormControl = group.get('pconfirm') as FormControl;
  let valid:Boolean = (password.value === pconfirm.value)
  return valid? null :{equal:{desff:'密码不一致'}}
}
