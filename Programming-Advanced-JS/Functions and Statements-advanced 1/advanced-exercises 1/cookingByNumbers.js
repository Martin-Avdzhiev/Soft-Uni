function solve (...commands){
    let number = Number(commands.shift());
    for (const command of commands){
        switch(command){
            case 'chop': number/=2; console.log(number); break;
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number+=1; console.log(number); break;
            case 'bake': number*=3;console.log(number); break;
            case 'fillet': number-= number*0.2;console.log(number); break;
        }
    }
}

solve ('9', 'dice', 'spice', 'chop', 'bake',

'fillet')