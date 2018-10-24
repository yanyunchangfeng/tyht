export function getMonthData(year?, month?) {
    // let year,month;
    let ret = [];
    if (!year || !month) {
        let date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
    }
    let firstdayofmonth = new Date(year,month-1,1);
    let firstdayweekday = firstdayofmonth.getDay();
    // if(firstdayweekday===0) firstdayweekday=0;
    let premonthday = firstdayweekday;
    let lastdayoflastmonth = new Date(year,month-1,0);
    let lastdateoflastmonth = lastdayoflastmonth.getDate();

    let lastday = new Date(year,month,0);
    let lastDate = lastday.getDate();
    for(let i = 0;i<42;i++){
        let date = i+1-premonthday;
        let showDate = date;
        if(date<=0){
            this.month = month-1;
            showDate = lastdateoflastmonth+date;
        }else if(date>lastDate){
            this.month = month+1;
            showDate = date-lastDate;
        }
        if(this.month==0) this.month = 12
        if(this.month==13) this.month = 1;
        ret.push(
            {
              year:year,
              month:this.month,
              date:date,
              showDate:showDate
            }
        )
    }

}
console.log(getMonthData(2018,10));