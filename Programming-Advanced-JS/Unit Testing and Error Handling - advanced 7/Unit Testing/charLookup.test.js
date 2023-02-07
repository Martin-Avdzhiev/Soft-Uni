const lookupChar = require('./charLookup');
const expect = require('chai').expect;
describe('testing charLookup', function(){
    it('wrong input of the first parameter', function (){
        expect(lookupChar(123,2)).to.equal(undefined);
    })
    it('wrong input of the second parameter', function (){
        expect(lookupChar('asd','1')).to.equal(undefined);
    })
    it('wrong input of the second parameter', function (){
        expect(lookupChar('test',2.5)).to.equal(undefined);
    })
    it('invalid index', function (){
        expect(lookupChar('test',-4)).to.equal("Incorrect index");
    })
    it('invalid index', function (){
        expect(lookupChar('test',44)).to.equal("Incorrect index");
    })
    it('valid input and valid index', function (){
        expect(lookupChar('test',2)).to.equal("s");
    })
    it('invalid index', function (){
        expect(lookupChar('test',0)).to.equal("t");
    })
    it('invalid index', function (){
        expect(lookupChar('test',3)).to.equal("t");
    })
})