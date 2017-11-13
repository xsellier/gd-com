class Vector2 {
  constructor (x, y) {
    this._name = 'vector2'
    this._x = x
    this._y = y
  }

  get name () {
    return this._name
  }

  set name (value) {
    return new Error(`Forbidden set name to ${value}`)
  }

  get x () {
    return this._x
  }

  set x (value) {
    this._x = value
  }

  get y () {
    return this._y
  }

  set y (value) {
    this._y = value
  }

  toString () {
    return `Vector2[x=${this.x},y=${this.y}]`
  }
}

module.exports = Vector2
