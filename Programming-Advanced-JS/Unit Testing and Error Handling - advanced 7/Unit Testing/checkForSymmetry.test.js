const isSymmetric = require('./checkForSymmetry');
const expect = require('chai').expect;

describe('Is it symmetry', function () {
    it('is input an array', ()=> {
        expect(isSymmetric([1,2,2,1])).to.equal(true);
    });
    it ('is input includes only numbers', ()=> {
        expect(isSymmetric(['1','2a',2,'1'])).to.equal(false);
    })
    it ('its not symmetry', ()=> {
        expect(isSymmetric(2,1,1,2)).to.equal(false);
    })
    it ('its not symmetry', ()=> {
        expect(isSymmetric([1,1,1,'1'])).to.equal(false);
    })
    it ('its not symmetry', ()=> {
        expect(isSymmetric([1,true,true,2])).to.equal(false);
    })
    
})