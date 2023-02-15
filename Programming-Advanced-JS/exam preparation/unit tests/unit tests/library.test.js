const { library } = require('./library');
const { expect }= require('chai');

describe("Tests …", function() {
    describe("caclPriceBook tests", function() {
        it("invalid input", function() {
           expect(()=>library.calcPriceOfBook(1,200)).to.throw(Error,`Invalid input`);
        });
        it("invalid input", function() {
            expect(()=>library.calcPriceOfBook('asiodjas',200.3254)).to.throw(Error,`Invalid input`);
         });
        it("invalid input", function() {
            expect(()=>library.calcPriceOfBook('1','1')).to.throw(Error,`Invalid input`);
         });
         it("valid input", function() {
            expect(library.calcPriceOfBook('the little prince',2000)).to.equal(`Price of the little prince is 20.00`)
         });
         it("valid input", function() {
            expect(library.calcPriceOfBook('the little prince',1980)).to.equal(`Price of the little prince is 10.00`)
         });
         it("valid input", function() {
            expect(library.calcPriceOfBook('the little prince',200)).to.equal(`Price of the little prince is 10.00`)
         });
     });
    
     describe('findBook tests',()=>{
        it("invalid input", function() {
            expect(()=>library.findBook([], 'asd')).to.throw(Error,`No books currently available`);
         });
         it("valid input", function() {
            expect(library.findBook(['asd'], 'asd')).to.equal(`We found the book you want.`)
         });
         it("valid input", function() {
            expect(library.findBook(['dsa'], 'asd')).to.equal(`The book you are looking for is not here!`)
         });
     })
     describe('arrangeTheBooks tests',()=>{
        it("invalid input", function() {
            expect(()=>library.arrangeTheBooks(-5)).to.throw(Error, `Invalid input`);
         });
         it("invalid input", function() {
            expect(()=>library.arrangeTheBooks('5')).to.throw(Error, `Invalid input`);
         });
         it("invalid input", function() {
            expect(()=>library.arrangeTheBooks(5.5)).to.throw(Error, `Invalid input`);
         });
         it("valid input", function() {
            expect(library.arrangeTheBooks(50)).to.equal(`Insufficient space, more shelves need to be purchased.`)
         });
         it("invalid input", function() {
            expect(library.arrangeTheBooks(10)).to.equal(`Great job, the books are arranged.`)
         });
         it("valid input", function() {
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`)
         });
     })
});
