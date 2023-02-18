const { findNewApartment } = require('./findApartment');
const { expect } = require('chai');
describe("Tests …", function() {
    describe("first method", ()=> {

        it("throw error", ()=> {
            expect(()=> findNewApartment.isGoodLocation ('gabrovo', 100)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isGoodLocation (100, false)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(findNewApartment.isGoodLocation ('gabrovo', true)).to.equal('This location is not suitable for you.');
        });
        it("throw error", ()=> {
            expect(findNewApartment.isGoodLocation ('Sofia', false)).to.equal('There is no public transport in area.');
        });
        it("y can go home", ()=> {
            expect(findNewApartment.isGoodLocation ('Sofia', true)).to.equal('You can go on home tour!');
        });
     });
     describe('second method',()=>{
        it("throw error", ()=> {
            expect(()=> findNewApartment.isLargeEnough(50, 30)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isLargeEnough([], 'dsfsd')).to.throw(Error,("Invalid input!"));
        });
        it("400 500 600 ", ()=> {
            expect(findNewApartment.isLargeEnough([400, 500, 600], 100)).to.equal('400, 500, 600');
        });
        it("450 550", ()=> {
            expect(findNewApartment.isLargeEnough([50, 450, 550], 120)).to.equal('450, 550');
        });
        it("nothing", ()=> {
            expect(findNewApartment.isLargeEnough([6,7, 5], 10000)).to.equal('');
        });
     })
     describe('third method',()=>{
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable('12', 50)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable(50, '12')).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable(0, 50)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable(50, 0)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable(1000, -10)).to.throw(Error,("Invalid input!"));
        });
        it("throw error", ()=> {
            expect(()=> findNewApartment.isItAffordable(-130, 20)).to.throw(Error,("Invalid input!"));
        });
        it("valid input", ()=> {
            expect(findNewApartment.isItAffordable(50, 10)).to.equal("You don't have enough money for this house!");
        });
        it("valid input", ()=> {
            expect(findNewApartment.isItAffordable(50, 1050)).to.equal("You can afford this home!");
        });
     })
});
