const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe("Tests …", function () {
    describe("calculate price tests", () => {
        it("calculate with first invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers(15, 25, 2)).to.throw(Error, 'Invalid input!');
        });
        it("calculate with second invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers('mac', '25', 2)).to.throw(Error, 'Invalid input!')
        });
        it("calculate with third invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers('mac', 25, '2')).to.throw(Error, 'Invalid input!');
        });
        it("calculate with non integer and negative price", () => {
            expect(() => flowerShop.calcPriceOfFlowers('mac', 25.2, 2)).to.throw(Error, 'Invalid input!');
        });
        it("calculate with non integer and negative quantity", () => {
            expect(() => flowerShop.calcPriceOfFlowers('mac', 25, 2.5)).to.throw(Error, 'Invalid input!');
        });
        it("calculate with valid input", () => {
            expect(flowerShop.calcPriceOfFlowers('mac', 25, 2)).to.equal(`You need $50.00 to buy mac!`);
        });
    });
            describe('check tests',()=>{
                it('not avaiable flower',()=>{
                    expect(flowerShop.checkFlowersAvailable('Mac',["Rose", "Lily", "Orchid"])).to.equal(`The Mac are sold! You need to purchase more!`);
                });
                it('avaiable flower',()=>{
                    expect(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
                });
            });
            describe('selling tests',()=>{
                it('invalid first input',()=>{
                    expect(()=>flowerShop.sellFlowers('Mac',23)).to.throw(Error, 'Invalid input!');
                });
                it('invalid second input',()=>{
                    expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'23')).to.throw(Error, 'Invalid input!');
                });
                it('space is below 0',()=>{
                    expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1)).to.throw(Error, 'Invalid input!');
                });
                it('space is over the array length',()=>{
                    expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],4)).to.throw(Error, 'Invalid input!');
                });
                it('valid input',()=>{
                    expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2)).to.equal('Rose / Lily');
                });
            });
});
