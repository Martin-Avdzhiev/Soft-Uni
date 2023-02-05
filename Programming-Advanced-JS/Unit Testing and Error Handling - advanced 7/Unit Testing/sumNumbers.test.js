const sum = require('./sumNumbers');
const { expect } = require('chai');

describe('Sum numbers tests', function () {
    it('Sum three numbers',()=> {
        const result = sum([1,2,3]);
        
      expect(result).to.equal(6);
    });
    it('Sum with negative numbers', ()=> {
        const result = sum([1,2,-3,12]);
        expect(result).to.equal(12);
    });
    it('Sum with zero and negative numbers', ()=> {
        const result = sum([0,1,-5,-13,10]);
        expect(result).to.equal(-7);
    })
    it('The input contains string', ()=> {
        const result = sum('adas','as','asdas');
        expect(result).to.be.NaN;
    })
    
})