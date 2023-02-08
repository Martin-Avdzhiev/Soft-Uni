class Company {
    constructor(){
        this.departments = {};
        this.object = {};
    }
    addEmployee(name, salary, position, department){
        if (!name || !position || !department || !salary || salary<0){
                throw new Error('Invalid input!');
        }
        const currentObject = {
            name: name,
            salary: Number(salary),
            position: position,
            department: department
        }
        if(this.departments[department]){
            this.departments[department].push(currentObject);
        }
        else {
            this.departments[department] = [];
            this.departments[department].push(currentObject);
        }
        
        if(!this.object[department]){
            this.object[department] = [];
            this.object[department].push(salary);
        }
        else {
            this.object[department].push(salary);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
        
    };
    bestDepartment(){
        const entries = Object.entries(this.object);
        let theBest = 0;
        let keyWinner = '';
        let bestAverage = 0;
        for(const entry of entries){
            const key = entry[0];
            const salaries = entry[1];
            let total = 0;
            let count = 0;
            for(const sal of salaries){
                total += sal;
                count++;
            }
            const average = total / count;
            if(theBest<average){
                theBest = average;
                keyWinner = key;
                bestAverage = average;
            }
        }
        const entryWinners = Object.entries(this.departments[keyWinner]);
        entryWinners.sort((a,b)=> {
            if (b[1].salary == a[1].salary){
                return a[1].name.localeCompare(b[1].name);
            }
            return b[1].salary - a[1].salary;
        })
      const result = [];
      result.push(`Best Department is: ${keyWinner}`)
      result.push(`Average salary: ${bestAverage.toFixed(2)}`);
        for(const winEntry of entryWinners){
            const currentName = winEntry[1].name;
            const currentSalary = winEntry[1].salary;
            const currenPosition = winEntry[1].position;
            result.push(currentName +' ' + currentSalary + ' ' + currenPosition);
        }
        return result.join('\n');
    }
}



let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 10, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());