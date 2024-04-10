"use strict";
class Department {
    constructor(employee) {
        this.employees = [];
        this.employeesArray = [];
        this.departmentName = "";
        this.employeesArray = [];
        this.departmentName = employee.department;
    }
    calculateAverageSalaryForDepartment() {
        let sum = 0;
        this.employeesArray.forEach((x) => sum += x.salary);
        return sum / this.employeesArray.length;
    }
    pushEmployee(employees) {
        this.employeesArray = employees;
    }
}
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email ? email : "n/a";
        this.age = age ? age : -1;
    }
}
function highestAverageSlary(input) {
    const employees = Number(input.shift());
    const data = formatInfo(input);
    const departments = [];
    for (const employee of data) {
        const index = departments.findIndex(x => x.departmentName === employee.department);
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
    let theBestDepartment;
    let theBestHighestSalary = 0;
    let theBestEmployees = [];
    for (const dep of departments) {
        if (dep.calculateAverageSalaryForDepartment() > theBestHighestSalary) {
            theBestDepartment = dep;
            theBestHighestSalary = dep.calculateAverageSalaryForDepartment();
            theBestEmployees = dep.employeesArray;
        }
    }
    theBestEmployees.sort((a, b) => b.salary - a.salary);
    let result = "";
    result += `Highest Average Salary: ${theBestDepartment === null || theBestDepartment === void 0 ? void 0 : theBestDepartment.departmentName}\n`;
    for (const theBestEmployee of theBestEmployees) {
        result += `${theBestEmployee.name} ${theBestEmployee.salary.toFixed(2)} ${theBestEmployee.email} ${theBestEmployee.age}\n`;
    }
    return result.trim();
}
function formatInfo(array) {
    const formatedData = [];
    for (const line of array) {
        const info = line.split(" ");
        let [name, salaryString, position, department] = info;
        const salary = Number(salaryString);
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
//# sourceMappingURL=companyRoster.js.map