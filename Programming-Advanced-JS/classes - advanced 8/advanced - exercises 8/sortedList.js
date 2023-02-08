class List {
    constructor(){
        this.result = [];
        this.size = this.result.length;
    }

    add(value){     
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a,b)=> a-b);
          
    }
    remove(index){
        if(index >= 0 && index < this.size){
            this.result.splice(index,1);
            this.result.sort((a,b)=> a-b);
            this.size = this.result.length;
        }
        else {
            throw new Error('Invalid index')
        }
        
    }
    get(index){
        if(index >= 0 && index < this.size){
            return this.result[index];
        } 
    }
}
let list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.remove(1);
console.log(list.get(11))
