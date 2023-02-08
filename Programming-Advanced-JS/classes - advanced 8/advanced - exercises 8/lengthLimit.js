class Stringer {
    constructor(string, length) {
        if(length<0){
            length = 0;
        }
        this.innerString = string;
        this.innerLength = Number(length);
        this.initialString = string;
    }
    increase(length) {
        this.innerLength += Number(length);
    }
    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.innerLength == 0){
            return '...';
        }
        else if(this.innerString.length<=this.innerLength){
            return this.initialString;
        }
        else {
            let removedLetters =  this.initialString.length - this.innerLength;
            let newString = this.initialString.substring(0,removedLetters);
            return newString + '...';
        }
    }
}

let test = new Stringer("Test", -5);

console.log(test.toString()); // ...

test.decrease(3);

console.log(test.toString()); // ...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); //Test