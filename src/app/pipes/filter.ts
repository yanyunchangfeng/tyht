import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let statusArray = [{ key: "1", value: "支付宝" }, { key: "2", value: "微信" }];
    for (var i in statusArray) {
      if (value == statusArray[i].key) {
        return statusArray[i].value;
      }
    }
  }
}
