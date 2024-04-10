class Department {
    employees: Employee[] = [];
    employeesArray: Employee[] = [];
    departmentName: string = "";
    constructor(employee: Employee) {
        this.employeesArray = [];
        this.departmentName = employee.department;
    }
    calculateAverageSalaryForDepartment(): number {
        let sum: number = 0
        this.employeesArray.forEach((x) => sum += x.salary);
        return sum / this.employeesArray.length;
    }
    pushEmployee(employees: Employee[]): void {
        this.employeesArray = employees
    }
}
class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email: string;
    age: number;
    constructor(name: string, salary: number, position: string, department: string, email: string | null, age: number | null) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email ? email : "n/a";
        this.age = age ? age : -1;
    }
}

function highestAverageSlary(input: string[]): string {
    const employees = Number(input.shift());
    const data: Employee[] = formatInfo(input);
    const departments: Department[] = [];
    for (const employee of data) {
        const index: number = departments.findIndex(x => x.departmentName === employee.department)
        if (index == -1) {
            const newDepartment = new Department(employee);
            newDepartment.employeesArray.push(employee);
            departments.push(newDepartment);
        }
        else {
            const addEmployee = departments[index].employeesArray;
            addEmployee.push(employee);
            departments[index].employeesArray = addEmployee;
        }
    }
    let theBestDepartment: Department | undefined;
    let theBestHighestSalary = 0;
    let theBestEmployees: Employee[] = [];
    for (const dep of departments) {
        if (dep.calculateAverageSalaryForDepartment() > theBestHighestSalary) {
            theBestDepartment = dep;
            theBestHighestSalary = dep.calculateAverageSalaryForDepartment();
            theBestEmployees = dep.employeesArray;
        }
    }
    theBestEmployees.sort((a, b) => b.salary - a.salary);
    let result = "";
    result += `Highest Average Salary: ${theBestDepartment?.departmentName}\n`;
    for (const theBestEmployee of theBestEmployees) {
        result += `${theBestEmployee.name} ${theBestEmployee.salary.toFixed(2)} ${theBestEmployee.email} ${theBestEmployee.age}\n`
    }
    return result.trim();
}

function formatInfo(array: string[]): Employee[] {
    const formatedData = [];
    for (const line of array) {
        const info = line.split(" ");
        let [name, salaryString, position, department] = info;
        const salary: number = Number(salaryString);
        let email = null;
        let age = null;
        if (info.length == 5) {
            if (isNaN(Number(info[4]))) {
                email = info[4];
            }
            else {
                age = Number(info[4]);
            }
        }
        else if (info.length == 6) {
            email = info[4];
            age = Number(info[5]);
        }
        const newEmployee = new Employee(name, salary, position, department, email, age);
        formatedData.push(newEmployee);
    }
    return formatedData;
}

console.log(highestAverageSlary([
    '6',

    'Tina 333.33 Manager Marketing 33',

    'Silver 496.37 Temp Coding silver@yahoo.com',

    'Sam 610.13 Manager Sales',

    'John 609.99 Manager Sales john@abv.bg 44',

    'Venci 0.02 Director BeerDrinking beer@beer.br 23',

    'Andre 700.00 Director Coding',

    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey',

]));