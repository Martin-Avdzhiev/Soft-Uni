const isOddOrEven = require('./evenOrOdd');
const expect = require('chai').expect;
describe('testing even or odd function', function (){
    it('test with array input', ()=> {
        expect(isOddOrEven(['test'])).to.equal(undefined);
    })
    it('test with numbers input', ()=> {
        expect(isOddOrEven(123)).to.equal(undefined);
    })
    it('test with odd length', ()=> {
        expect(isOddOrEven('12345')).to.equal('odd');
    })
    it('test with even length', ()=> {
        expect(isOddOrEven('123456')).to.equal('even');
    })
    it('test with empty string', ()=> {
        expect(isOddOrEven('')).to.equal('even');
    })
})