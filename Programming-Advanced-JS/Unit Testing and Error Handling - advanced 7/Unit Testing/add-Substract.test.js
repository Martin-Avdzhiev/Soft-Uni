const createCalculator = require('./add-Substract');
const expect = require('chai').expect;

describe('Calculator', function (){
    let value = null;
   beforeEach(()=> {
    value = createCalculator();
   });
   it ('return 0 initial value', ()=> {
    expect(value.get()).to.equal(0);
   });
   it('return 10 when add 10', ()=>{
    value.add(10);
    expect(value.get()).to.equal(10);
   });
   it('return -10 when substract 10', ()=>{
    value.subtract(10);
    expect(value.get()).to.equal(-10);
   });
   it('return 0 when add 10 and substract 10', ()=>{
    value.add(10);
    value.subtract(10);
    expect(value.get()).to.equal(0);
   });
   it('return 20 when add 10 twice', ()=>{
    value.add(10);
    value.add(10);
    expect(value.get()).to.equal(20);
   });
   it('return -20 when subtract 10 twice', ()=>{
    value.subtract(10);
    value.subtract(10);
    expect(value.get()).to.equal(-20);
   });
   it('return 50 when add 100, subtract 25, add 50, subtract 75', ()=>{
    value.add(100);
    value.subtract(25);
    value.add(50);
    value.subtract(75);
    expect(value.get()).to.equal(50);
   });
   it('return 20 when add 10 twice but one 10 is in string', ()=>{
    value.add(10);
    value.add('10');
    expect(value.get()).to.equal(20);
   });
   it('return -20 when subtract 10 twice but one 10 is in string', ()=>{
    value.subtract(10);
    value.subtract('10');
    expect(value.get()).to.equal(-20);
   });
})