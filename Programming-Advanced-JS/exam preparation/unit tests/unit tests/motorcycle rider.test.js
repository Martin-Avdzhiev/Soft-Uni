const { motorcycleRider } = require('./Motorcycle Rider');
const { expect } = require('chai');

describe("Tests …", function() {
    describe("licenseRestriction tests", ()=> {
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.licenseRestriction('FRAS')).to.throw(Error,'Invalid Information!');
        });
        it("valid input", ()=> {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });
        it("valid input", ()=> {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });
        it("valid input", ()=> {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });
        it("valid input", ()=> {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        });
     });
     describe('motorcycleShowroom',()=>{
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.motorcycleShowroom([],'1')).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.motorcycleShowroom('1',1)).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.motorcycleShowroom('1',[])).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.motorcycleShowroom([],100)).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.motorcycleShowroom(['125','250'],40)).to.throw(Error,'Invalid Information!');
        });
        it("valid input", ()=> {
            expect(motorcycleRider.motorcycleShowroom(['125','250','375'],400)).to.equal(`There are 3 available motorcycles matching your criteria!`)
        });
        it("valid input", ()=> {
            expect(motorcycleRider.motorcycleShowroom(['25','250','500'],400)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        });
     })
     describe('otherSpendings',()=>{
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.otherSpendings(1,[],true)).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.otherSpendings([],1,true)).to.throw(Error,'Invalid Information!');
        });
        it("invalid input", ()=> {
            expect(()=> motorcycleRider.otherSpendings([],[],1)).to.throw(Error,'Invalid Information!');
        });
        it("valid input", ()=> {
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
        });
        it("valid input", ()=> {
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)).to.equal('You spend $600.00 for equipment and consumables!')
        });
     })
    
});
