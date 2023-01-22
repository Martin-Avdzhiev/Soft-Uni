function days (month, year){
    month = Number(month);
    year = Number(year);
    let date = new Date();
    date.setMonth(month);
    date.setDate(0);
    console.log(date.getDate())
}

days ('1', '2012')