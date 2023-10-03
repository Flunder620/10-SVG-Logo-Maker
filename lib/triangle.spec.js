const Triangle = require('./triangle')

describe('Triangle', () =>{
    test('Should render svg for Triangle', () =>{
        const triangle = new Triangle()
        triangle.setColor('Green')
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="Green"/>`)
    })
})