const { movieTheater } = require('./03. Movie Theater _Resources');
const { expect } = require('chai');

describe("Tests …", function() {
    describe("tests with ageRestrictions", () => {

        it("with G", ()=> {
            expect(movieTheater.ageRestrictions('G')).to.be.equal('All ages admitted to watch the movie');       //`All ages admitted to watch the movie`
        });
        it("with PG", ()=> {
            expect(movieTheater.ageRestrictions('PG')).to.be.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");       //`All ages admitted to watch the movie`
        });
        it("with R", ()=> {
            expect(movieTheater.ageRestrictions('R')).to.be.equal("Restricted! Under 17 requires accompanying parent or adult guardian");       //`All ages admitted to watch the movie`
        });
        it("with NC-17", ()=> {
            expect(movieTheater.ageRestrictions('NC-17')).to.be.equal("No one under 17 admitted to watch the movie");       //`All ages admitted to watch the movie`
        });
        it("with hi", ()=> {
            expect(movieTheater.ageRestrictions('hi')).to.be.equal("There are no age restrictions for this movie");       //`All ages admitted to watch the movie`
        });

     });
     describe("tests with moneySpent ", () => {
        it("invalid input", ()=> {
            expect(()=> movieTheater.moneySpent('1', [], [])).to.throw(Error,'Invalid input');       //`All ages admitted to watch the movie`
        });
        it("invalid input", ()=> {
            expect(()=> movieTheater.moneySpent('1', [], [])).to.throw(Error,'Invalid input');       //`All ages admitted to watch the movie`
        });
        it("invalid input", ()=> {
            expect(()=> movieTheater.moneySpent(1, 1, [])).to.throw(Error,'Invalid input');       //`All ages admitted to watch the movie`
        });
        it("invalid input", ()=> {
            expect(()=> movieTheater.moneySpent(1, [], true)).to.throw(Error,'Invalid input');       //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(2, ['Nachos','Popcorn'], ['Soda','Water'])).to.equal('The total cost for the purchase is 44.50')     //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 23.50')     //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(2, ['Nachos','Popcorn'], [])).to.equal('The total cost for the purchase is 40.50')     //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(1, [], ['Soda','Water'])).to.equal('The total cost for the purchase is 19.00')     //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(3, ['Nachos','Popcorn'], ['Soda','Water'])).to.equal('The total cost for the purchase with applied discount is 47.60')     //`All ages admitted to watch the movie`
        });
        it("valid input", ()=> {
            expect(movieTheater.moneySpent(0, ['Nachos','Popcorn'], ['Soda','Water'])).to.equal('The total cost for the purchase is 14.50')     //`All ages admitted to watch the movie`
        });
     })
     describe("tests with reservation ", () => {
        it("invalid input", ()=> {
            expect(()=>movieTheater.reservation ({}, 1)).to.throw(Error,'Invalid input');     
        });
        it("invalid input", ()=> {
            expect(()=>movieTheater.reservation ([], '1')).to.throw(Error,'Invalid input');     
        });
        it("valid input", ()=> {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}],1)).to.equal(1)  
        });
        it("valid input", ()=> {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7},{rowNumber: 2, freeSeats: 5}],1)).to.equal(2)  
        });
        
     })

});
