const chai = require('chai')
const gdCom = require('../lib')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const expect = chai.expect

let data = {
  Boolean: [ true, false ],
  Integer: [ 42, -42, 0 ],
  Float: [ -42.4, 42.45, 0.0, 0.15 ],
  String: [ 'test', 'test2', 'true', 'false' ],
  Dictionary: [{
    true: false,
    12: -12,
    test: 'test',
    dataDeepFile
  }],
  Array: [
    [ true, false, 12, -12, 'test', 'test2' ],
    dataFile
  ],
  Vector2: [ new gdCom.objects.Vector2(2, 3) ],
  Rect2: [ new gdCom.objects.Rect2(2, 3, 4, 5) ]
}

describe('GDCom, ', () => {
  describe('using a TCP connection', () => {
    for (let objecType in data) {
      it(`should encode/decode ${objecType}`, () => {
        let dataType = data[objecType]

        return dataType.reduce((promise, value) => {
          return promise.then(() => gdCom.TCP.encode(value))
            .then(gdCom.TCP.decode)
            .then((decodedValue) => {
              if (/Float/i.test(objecType)) {
                expect(decodedValue).to.be.closeTo(value, 0.00001)
              } else {
                expect(decodedValue).to.deep.equal(value)
              }
            })
        }, Promise.resolve())
      })
    }
  })

  describe('using a UDP connection', () => {
    for (let objecType in data) {
      it(`should encode/decode ${objecType}`, () => {
        let dataType = data[objecType]

        return dataType.reduce((promise, value) => {
          return promise.then(() => gdCom.UDP.encode(value))
            .then(gdCom.UDP.decode)
            .then((decodedValue) => {
              if (/Float/i.test(objecType)) {
                expect(decodedValue).to.be.closeTo(value, 0.00001)
              } else {
                expect(decodedValue).to.deep.equal(value)
              }
            })
        }, Promise.resolve())
      })
    }
  })
})
