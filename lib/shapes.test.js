const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should create a circle', () => {
            const newCircle = new Circle("aaa", "white", "blue");
            expect(newCircle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>`);
        });
    });

    describe('Square', () => {
        it('should create a square', () => {
            const newSquare = new Square("bbb", "black", "yellow");
            expect(newSquare.render()).toEqual(`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg" ><rect x="0" y="0" width="180px" height="180" fill="yellow" /><text x="90" y="110" font-size="60" text-anchor="middle" fill="black">bbb</text>`);
        });
    });

    describe('Triangle', () => {
        it('should create a triangle', () => {
            const newTriangle = new Triangle("ccc", "red", "green");
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ccc</text>`;
            expect(newTriangle.render().replace(/\s/g, '')).toEqual(expectedSVG.replace(/\s/g, ''));
        });
    });    
    });