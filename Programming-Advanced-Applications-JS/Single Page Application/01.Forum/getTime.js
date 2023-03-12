export function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    let month = Number(date.getMonth()) + 1;
    month >= 10 ? month : month = '0' + month;
    let day = date.getDate();
    day >= 10 ? day : day = '0' + day;
    let hours = date.getHours();
    hours >= 10 ? hours : hours = '0' + hours;
    let minutes = date.getMinutes();
    minutes >= 10 ? minutes : minutes = '0' + minutes;
    let seconds = date.getSeconds();
    seconds >= 10 ? seconds : seconds = '0' + seconds;
    const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return time;
}

export function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    let month = Number(date.getMonth()) + 1;
    month >= 10 ? month : month = '0' + month;
    let day = date.getDate();
    day >= 10 ? day : day = '0' + day;
    let hours = date.getHours();
    hours >= 10 ? hours : hours = '0' + hours;
    let minutes = date.getMinutes();
    minutes >= 10 ? minutes : minutes = '0' + minutes;
    let seconds = date.getSeconds();
    seconds >= 10 ? seconds : seconds = '0' + seconds;
    let text = 'AM';
    if(hours >= 13){
        hours -= 12;
        text = 'PM';
    }
    const time = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${text}`;
    return time;
}