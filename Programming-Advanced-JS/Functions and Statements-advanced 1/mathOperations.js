function operation (a,b,operator){
    //+', '-', '*', '/', '%', '**'.
    let object = {
        '+': a+b,
        '-': a-b,
        '*': a*b,
        '/': a/b,
        '%': a%b,
        '**': a**b,
    }
    console.log(object[operator])
}

operation(3, 5.5, '*')