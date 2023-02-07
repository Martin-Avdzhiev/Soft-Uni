const rgbToHexColor = require('./rgbToHex');
const expect = require('chai').expect;
describe('Tests with rgb to Hex', function () {
    it('invalid red', () => {
        expect(rgbToHexColor(300, 250, 10)).to.equal(undefined);
    })
    it('invalid green', () => {
        expect(rgbToHexColor(100, 280, 15)).to.equal(undefined);
    })
    it('invalid blue', () => {
        expect(rgbToHexColor(100, 103, 300)).to.equal(undefined);
    })
    it('valid input', () => {
        expect(rgbToHexColor(100, 100, 100)).to.equal('#646464');
    })
    it('valid input', () => {
        expect(rgbToHexColor(100, 200, 0)).to.equal('#64C800');
    })
    it('valid input', () => {
        expect(rgbToHexColor(10, 58, 69)).to.equal('#0A3A45');
    })
    it('input is not from integers', () => {
        expect(rgbToHexColor(10.3, 58.65, 69)).to.equal(undefined);
    })
    
    it('input is not from numbers', () => {
        expect(rgbToHexColor(10, '58', 69)).to.equal(undefined);
    })
    it('input is not from numbers', () => {
        expect(rgbToHexColor(true, 58, 69)).to.equal(undefined);
    })

    it('input is not from numbers', () => {
        expect(rgbToHexColor([60, 58, 69])).to.equal(undefined);
    })
    
    it('input contains negative numbers', () => {
        expect(rgbToHexColor(-10, 58, 12)).to.equal(undefined);
    })
    it('input is black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })
    it('input is white', () => {
        expect(rgbToHexColor(255,255, 255)).to.equal('#FFFFFF');
    })
   
})
