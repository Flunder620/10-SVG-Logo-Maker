const Square = require('./square')

describe('Square',() =>{
    test('Should render svg for Square', () => {
        const square = new Square()
        square.setColor('Green')
        expect(square.render()).toEqual(`<rect x="50" y="10" width="200" height="200" fill = "Green"/>`)
    })
})