function solve (a,b){
    let bigger = 0;
    let smaller = 0;
    if (a>b){
        bigger = a;
        smaller = b;
    }
    else {
        bigger = b;
        smaller = a;
    }
    for (let i = bigger; i>=1;i--){
        if (bigger % i == 0 && smaller % i == 0){
            return i
        }
    }
}

solve (15,5)