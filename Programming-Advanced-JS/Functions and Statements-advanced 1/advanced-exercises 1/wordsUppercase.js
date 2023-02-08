function solve(string){
    const pattern = /[A-Za-z0-9]+/g;
    console.log(string.match(pattern).join(', ').toUpperCase());
}

solve('Hi, how are you?')