const dayToNumber: (day: string) => number | string = (day) => {
    const days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const index = days.indexOf(day);
    if(index != -1){
        return index+1;
    }
    else{
        return "error";
    }
}
console.log(dayToNumber("Monday"))
console.log(dayToNumber("asd"))