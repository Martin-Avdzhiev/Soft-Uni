function stars(number){
    let row = '';
    for (let i = 1; i<=number; i++){
        for (let j = 1; j<=number; j++){
            row += '* ';
        }
        console.log(row)
        row = '';
    }
}

stars(7)