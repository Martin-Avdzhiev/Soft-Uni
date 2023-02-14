class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
        this.names = [];
        this.genders = [];
        this.winnersNames = [];
        this.winnersGenders = [];
    };
    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }
        else {
            this.names.push(participantName);
            this.genders.push(participantGender);
        };
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }
    completeness (participantName, condition){
        if(!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if(condition<30){
            throw new Error (`${participantName} is not well prepared and cannot finish any discipline`);
        }
        else if (condition>=30 && condition<90){
            let count = 0;
            if(condition<60){
                count = 1;
            }
            else {
                count = 2;
            }
            return `${participantName} could only complete ${count} of the disciplines`;
        }
        else {
            const nameIndex = this.names.indexOf(participantName);
            const name = this.names[nameIndex];
            const gender = this.participants[name];
            const currentObject = {};
            currentObject[name] = gender;
            this.listOfFinalists.push(currentObject);
            delete this.participants[name];
            this.winnersNames.push(name)
            this.winnersGenders.push(gender);
            this.names.splice(nameIndex,1);
            this.genders.splice(nameIndex,1);
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }
    rewarding (participantName){
        if(!this.winnersNames.includes(participantName)){
            return `${participantName} is not in the current finalists list`;
        }
        else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }
    showRecord (criteria){
        if(this.listOfFinalists.length == 0){
            return `There are no finalists in this competition`;
        }
        let females = 0;
        let males = 0;
        for (const gender of this.winnersGenders){
            if(gender == 'male'){
                males++;
            }
            else {
                females++;
            }
        }
        if(criteria == 'male'){
            if(males == 0){
                return `There are no male's that finished the competition`;
            }
            else {
                let firstName = '';
                for(let i = 0 ; i<this.winnersNames.length;i++){
                    if(this.winnersGenders[i] == 'male'){
                        firstName = this.winnersNames[i];
                        i=this.winnersNames.length;
                    }
                }
                return `${firstName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        };
        if(criteria == 'female'){
            if(females == 0){
            return `There are no female's that finished the competition`;
            }
            else {
                let firstName = '';
                for(let i = 0 ; i<this.winnersNames.length;i++){
                    if(this.winnersGenders[i] == 'female'){
                        firstName = this.winnersNames[i];
                        i=this.winnersNames.length;
                    }
                }
                return `${firstName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        };
            if(criteria == 'all'){
                const result = [];
                result.push(`List of all ${this.competitionName} finalists:`);
                this.winnersNames.sort((a,b)=> a.localeCompare(b));
                for(const name of this.winnersNames){
                    result.push(name);
                }
                return result.join('\n');
            }
    }

}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));



