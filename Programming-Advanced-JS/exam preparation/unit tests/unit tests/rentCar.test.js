const { rentCar } = require('./rentCar.js');
const { expect } = require('chai');

describe("Tests …", function() {
    describe("searching tests", ()=> {
        it("invalid first input", ()=> {
        expect(()=> rentCar.searchCar(12, 'BMW')).to.throw(Error,'Invalid input!');
    })
    it("invalid second input", ()=> {
        expect(()=> rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 12)).to.throw(Error,'Invalid input!');
    })
    it("no model in the catalog", ()=> {
        expect(()=> rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Toyota')).to.throw(Error,'There are no such models in the catalog!');
    })
    it("valid input and car is in the catalog", ()=> {
        //`There is ${findModel.length} car of model ${model} in the catalog!`;
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
    });
    it("valid input and multiple cars is in the catalog", ()=> {
        //`There is ${findModel.length} car of model ${model} in the catalog!`;
        expect(rentCar.searchCar(["Volkswagen", "BMW", "BMW",'BMW'], 'BMW')).to.equal(`There is 3 car of model BMW in the catalog!`);
    });
    }) 
        describe('calculating tests',()=>{
            //calculatePriceOfCar(model, days) 
            it('invalid first input',()=>{
                expect(()=> rentCar.calculatePriceOfCar('BMW', '14')).to.throw(Error,'Invalid input!');
            });
            it('invalid second input',()=>{
                expect(()=> rentCar.calculatePriceOfCar(15, 14)).to.throw(Error,'Invalid input!');
            });
            it('no car in catalog',()=>{
                expect(()=> rentCar.calculatePriceOfCar('Lambo', 14)).to.throw(Error,'No such model in the catalog!');
            });
            it('car is in catalog',()=>{
                expect(rentCar.calculatePriceOfCar('Audi', 4)).to.equal('You choose Audi and it will cost $144!');
            });
        });
        describe('bugdet tests',()=>{
            it('invalid first input',()=>{
                expect(()=> rentCar.checkBudget('13',2,50)).to.throw(Error,'Invalid input!');
            });
            it('invalid second input',()=>{
                expect(()=> rentCar.checkBudget(13,'2',50)).to.throw(Error,'Invalid input!');
            });
            it('invalid third input',()=>{
                expect(()=> rentCar.checkBudget(13,2,'50')).to.throw(Error,'Invalid input!');
            });
            it('no budget',()=>{
                expect(rentCar.checkBudget(20,5,50)).to.equal('You need a bigger budget!')
            });
            it('budget is equal price',()=>{
                expect(rentCar.checkBudget(20,5,100)).to.equal('You rent a car!')
            });
            it('budget is bigger than price',()=>{
                expect(rentCar.checkBudget(20,5,500)).to.equal('You rent a car!')
            });
        })
     });
     //Invalid input!

    //  let catalogue = {
    //     Volkswagen: 20,
    //     Audi: 36,
    //     Toyota: 40,
    //     BMW: 45,
    //     Mercedes: 50
    // };
