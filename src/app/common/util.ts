class Util {
  static transform(arr,key1,key2){
    let newarr =[];
    for(let i = 0;i<arr.length;i++){
      let temp = arr [i];
      let obj ={};
      obj[key1] = temp[key1];
      obj[key2] = temp[key2];
      newarr.push(obj)
    }
    return newarr
  }
}
export default{
  Util
}
