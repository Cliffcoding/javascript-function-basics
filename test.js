const expect = require('chai').expect;
const functions = require('./index.js');

describe('sum', function () {
    it('should find the sum of two numbers', function () {
        expect(functions.sum(2, 2)).to.equal(4);
        expect(functions.sum(2, -5)).to.equal(-3);
    })
});

describe('difference', function () {
    it('should find the difference of two numbers', function () {
        expect(functions.difference(5, 3)).to.equal(2);
        expect(functions.difference(5, 10)).to.equal(-5);
    })
});

describe('product', function () {
    it('should find the product of two numbers', function () {
        expect(functions.product(2, 6)).to.equal(12);
        expect(functions.product(2, 0)).to.equal(0);
    })
});

describe('quotient', function () {
    it('should find the quotient', function () {
        expect(functions.quotient(2, 2)).to.equal(1);
        expect(functions.quotient(10, 5)).to.equal(2);
    })
});

describe('rectangle', function () {
    it('should find the area of a rectangle', function () {
        expect(functions.rectangle(2, 4)).to.equal(8);
        expect(functions.rectangle(4, 10)).to.equal(40);
    })
});

describe('square', function () {
    it('should find the area of a square', function () {
        expect(functions.square(2)).to.equal(4);
        expect(functions.square(4)).to.equal(16);
    })
});

describe('trapezoid', function () {
    it('should find the area of a trapezoid', function () {
        expect(functions.trapezoid(4, 3, 7)).to.equal();
        expect(functions.trapezoid(8, 10, 20)).to.equal();
    })
});

describe('circle', function () {
    it('should find the area of a circle', function () {
        expect(functions.circle(2)).to.equal(4);
        expect(functions.circle(4)).to.equal(16);
    })
});

describe('ellipse', function () {
    it('should find teh area of an ellipse', function () {
        expect(functions.ellipse(2)).to.equal(4);
        expect(functions.ellipse(4)).to.equal(16);
    })
});

describe('triangle', function () {
    it('should find the area of a triangle', function () {
        expect(functions.triangle(2)).to.equal(4);
        expect(functions.triangle(4)).to.equal(16);
    })
});