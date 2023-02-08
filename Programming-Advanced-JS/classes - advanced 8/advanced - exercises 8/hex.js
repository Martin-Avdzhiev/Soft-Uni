class Hex {
    constructor(value){
        this.value = Number(value);
    }
    toString(){
        let hexString = (this.value.toString(16)).toUpperCase();
        return '0x' + hexString;
    }
    plus(input){
        let result = 0;
        if(typeof input === 'object'){
             result = this.value + input.value;
        }
        else {
             result = this.value + Number(input);
        }
        
        return new Hex(result);
    }
    minus(input){
        let result = 0;
        if(typeof input === 'object'){
             result = this.value - input.value;
        }
        else {
             result = this.value - Number(input);
        }
        
        return new Hex(result);
    }
    parse(string){
        let decimal = parseInt(string, 16);
        return Number(decimal);
    }
    valueOf(){
        return this.value;
    }
}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

