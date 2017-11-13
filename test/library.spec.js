const chai = require('chai')
const gdCom = require('../lib')

const expect = chai.expect

let data = {
  Boolean: [ true, false ],
  Integer: [ 42, -42, 0 ],
  Float: [ -42.4, 42.45, 0.0, 0.15 ],
  String: [ 'test', 'test2', 'true', 'false' ],
  Dictionary: [{
    true: false,
    12: -12,
    test: 'test'
  }],
  Array: [[ true, false, 12, -12, 'test', 'test2' ]],
  Vector2: [ new gdCom.objects.Vector2(2, 3) ],
  Rect2: [ new gdCom.objects.Rect2(2, 3, 4, 5) ]
}

describe('GDCom, ', () => {
  describe('using a TCP connection', () => {
    for (let objecType in data) {
      it(`should encode/decode ${objecType}`, () => {
        let dataType = data[objecType]

        dataType.forEach((value) => {
          var encodedValue = gdCom.TCP.encode(value)
          var decodedValue = gdCom.TCP.decode(encodedValue)

          if (/Float/i.test(objecType)) {
            expect(decodedValue).to.be.closeTo(value, 0.00001)
          } else {
            expect(decodedValue).to.deep.equal(value)
          }
        })
      })
    }
  })

  describe('using a UDP connection', () => {
    for (let objecType in data) {
      it(`should encode/decode ${objecType}`, () => {
        let dataType = data[objecType]

        dataType.forEach((value) => {
          var encodedValue = gdCom.UDP.encode(value)
          var decodedValue = gdCom.UDP.decode(encodedValue)

          if (/Float/i.test(objecType)) {
            expect(decodedValue).to.be.closeTo(value, 0.00001)
          } else {
            expect(decodedValue).to.deep.equal(value)
          }
        })
      })
    }
  })
})
