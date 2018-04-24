import * as Exercise from '../src'

describe('Promises', () => {

  describe('Fulfilled', () => {
    it(`resolving a promise from a value`, async () => {
      const value = Exercise.resolvingValues()
      expect(value).to.be.an.instanceof(Promise)
      expect(await value).to.be.a.string()
    })
  })

  describe('Rejected', () => {
    it(`rejects a promise`, async () => {
      const value = Exercise.rejectedPromise()
      expect(value).to.be.an.instanceof(Promise)
      try {
        await value
      } catch (err) {
        expect(err).to.equal('Doh')
      }
    })
  })

  describe('Controlling flow', () => {

    it(`is positive`, async () => {
      const number = 1
      const value = Exercise.conditionallyReject(number)
      expect(value).to.be.an.instanceof(Promise)
      expect(await value).to.equal(number)
    })

    it(`is negative`, async () => {
      const number = -1
      const value = Exercise.conditionallyReject(number)
      expect(value).to.be.an.instanceof(Promise)
      try {
        await value
      } catch(err) {
        expect(err).to.equal(number)
      }
    })

  })

})
