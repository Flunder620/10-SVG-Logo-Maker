const Square = require('./square')

describe('Square',() =>{
    test('Should render svg for Square', () => {
        const square = new Square()
        square.setColor('Green')
        expect(square.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill = "Green"/>`)
    })
})