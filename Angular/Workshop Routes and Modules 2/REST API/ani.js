function uchebnici(input) {
    let pages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])
    let neededHours =  ((pages / pagesPerHour) / days)
    console.log(neededHours)

}
uchebnici(["212", "20", "0"])