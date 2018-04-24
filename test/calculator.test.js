import Calculator from '../src/calculator'

describe(`Calculator`, () => {

  describe('.add(...values)', () => {

    it(`accepts variable parameters, and `, async () => {
      const result = await Calculator.add(1,2,3)
      expect(result).to.equal(6)
    })


  })

  describe(`.subtract(...values)`, () => {

    it(`accepts variable parameters, and `, async () => {
      const result = await Calculator.subtract(1,2,3)
      expect(result).to.equal(-6)
    })

  })


})
