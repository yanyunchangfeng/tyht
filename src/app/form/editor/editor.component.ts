import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  arr=[1,3,4,7,8,9,2,5,11,10];
  constructor() { }

  ngOnInit() {
    this.bubbleSort(this.arr);
    console.log(this.arr);
    // for(let i= 0;i<20000000;i++){
    //   this.arr[i] = Math.floor(Math.random()*100);
    // }
    // console.log(this.arr);
    // console.time('set');
    // let newarrset;
    // newarrset = new Set(this.arr);
    // console.timeEnd('set');
    // console.time('1');
    console.time('quicksort');
    this.quickSort(this.arr);
    console.log(this.arr);
    console.timeEnd('quicksort')
    let newarr = this.unique(this.arr);
    // console.timeEnd('1');
    // console.log(newarr);
  }
  bubbleSort(arr){
    for (let r =1;r<arr.length;r++){
        for(let j= 0;j<arr.length-r;j++){
          if(arr[j]>arr[j+1]){
            arr[j+1]=[arr[j],arr[j]=arr[j+1]][0];
          }
        }
    }
  }
  unique(arr){
    let result = [];
     for(let i = 0,hash=[];i<arr.length;i++){
       if(!hash[arr[i]]){
         result.push(arr[i]);
         hash[arr[i]] = true;
       }
     }
     return result;
  }
  quickSort(arr){
    if(arr.length>1){
      let c = parseInt(arr.length/2+'');
      let center = arr.splice(c,1);
      let left = [];
      let right = [];
      for(let i = 0;i<arr.length;i++){
        if(arr[i]<center){
          left.push(arr[i]);
        }else{
          right.push(arr[i]);
        }
      }
      return this.quickSort(left).concat(center,this.quickSort(right));
    }else{
      return arr
    }
  }
  insertSort(arr){
    for(let i = 1; i<arr.length;i++){
      let t = arr[i];
      let p =i-1;
      while(p>=0&&arr[p]>t){
        arr[p+1]=arr[p];
        p--;
      }
      arr[p+1] = t;
    }
  }
}
// Function.prototype.bind = function(obj) {
//   let fun  = this;
//   let args1 = [].slice.call(arguments, 1);
//   return function(){
//       let args2 = [].slice.call(arguments);
//      fun.apply(obj,args1.concat(args2));
//   }
// }
