class Box <T>{
   public type:T;
    constructor(type:T){
        this.type = type;
    }
    toString():string{
        return `${this.type} is of type ${typeof this.type}`;
    }
}

let box1 = new Box(['test']);

let box2 = new Box(20);

let box3 = new Box('Hello');

console.log(box1.toString());

console.log(box2.toString());

console.log(box3.toString());