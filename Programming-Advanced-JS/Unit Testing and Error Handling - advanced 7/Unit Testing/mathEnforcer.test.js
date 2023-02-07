const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;
describe('lets test some math', function(){

    it('lets add5 with string', ()=> {
        expect(mathEnforcer.addFive('5')).to.equal(undefined);
    })

    it('lets add5 with number', ()=> {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    })

    it('lets add5 with number', ()=> {
        expect(mathEnforcer.addFive(-55)).to.equal(-50);
    })
    it('lets add5 with number', ()=> {
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    })

    it('lets subtractTen with string', ()=> {
        expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
    })

    it('lets subtractTen with number', ()=> {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    })

    it('lets subtractTen with number', ()=> {
        expect(mathEnforcer.subtractTen(-30)).to.equal(-40);
    })

    it('lets subtractTen with number', ()=> {
        expect(mathEnforcer.subtractTen(50)).to.equal(40);
    })

    it('lets subtractTen with number', ()=> {
        expect(mathEnforcer.subtractTen(6.5)).to.equal(-3.5);
    })


    it('lets sum with number and string', ()=> {
        expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
    })
    it('lets sum with number and string', ()=> {
        expect(mathEnforcer.sum('5',5)).to.equal(undefined);
    })

    it('lets sum with numbers', ()=> {
        expect(mathEnforcer.sum(5,5)).to.equal(10);
    })
    
    it('lets sum with float numbers', ()=> {
        expect(mathEnforcer.sum(5.3,4.8)).to.equal(10.1);
    })
})

