const Circle = require('./circle')

describe('Circle',() =>{
    test('Should render svg for circle', () => {
        const circle = new Circle()
        circle.setColor('Green')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="Green"/>')
    })
})