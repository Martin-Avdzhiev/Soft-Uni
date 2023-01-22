function previous (year,month,day){
    let date = new Date(year,month-1,day-1);
    let finalYear = date.getFullYear();
    let finalMonth = date.getMonth()+1;
    let finalDay = date.getDate();
    console.log(`${finalYear}-${finalMonth}-${finalDay}`)
}

previous(2016, 9, 30)