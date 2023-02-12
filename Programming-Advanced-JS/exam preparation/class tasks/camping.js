class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.names = [];
    }
    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error('Unsuccessful registration at the camp.'); //done
        }
        if(this.names.includes(name)){
        return`The ${name} is already registered at the camp.`;
        }
        money = Number(money);
        if(this.priceForTheCamp[condition] > money){
           return `The money is not enough to pay the stay at the camp.`;
        }
        this.names.push(name);
        this.listOfParticipants.push({name: name, condition: condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant (name){
        if(!this.names.includes(name)){
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        else {
            const index = this.names.indexOf(name);
            this.names.splice(index,1);
            this.listOfParticipants.splice(index,1);
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay (typeOfGame, participant1, participant2){
        let player1 = this.listOfParticipants.find(x=> x.name == participant1);
        if(!player1){
            throw new Error(`Invalid entered name/s.`);
        }
        let player2 = null;
        if(typeOfGame == 'Battleship'){
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }
        if(typeOfGame == 'WaterBalloonFights'){
            player2 = this.listOfParticipants.find(x=> x.name == participant2);
            if(!player2){
                throw new Error(`Invalid entered name/s.`);
            }
            if(player1.condition !== player2.condition){
                throw new Error(`Choose players with equal condition.`);
            }
            if(player1.power > player2.power){
                player1.wins ++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            }
            else if(player1.power < player2.power){
                player2.wins ++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            }
            else {
                return `There is no winner.`;
            }
        }
    }
    toString (){
        let first = `${this.organizer} will take ${this.names.length} participants on camping to ${this.location}`;
        this.listOfParticipants.sort((a,b)=> b.wins - a.wins);
        let array = [];
        array.push(first);
        for(let line of this.listOfParticipants){
            let output = `${line.name} - ${line.condition} - ${line.power} - ${line.wins}`;
            array.push(output)
        }    
        return array.join('\n')
    }
}


let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.log(camp.registerParticipant('Petar Petarson', 'child', 300), "The Petar Petarson was successfully registered.");

console.log(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");

console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");

console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'), "The Sara Dickinson is winner in the game WaterBalloonFights.");

console.log(camp.toString());
// const SummerCamp = result;
// let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

// assert.equal(camp.registerParticipant('Petar Petarson', 'child', 300), "The Petar Petarson was successfully registered.");

// assert.equal(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");

// assert.equal(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");

// assert.equal(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'), "The Sara Dickinson is winner in the game WaterBalloonFights.");

// assert.equal(camp.toString(),`Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`);


// 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\n
//[object Object]\n[object Object]' 'to equal' 
//'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'



