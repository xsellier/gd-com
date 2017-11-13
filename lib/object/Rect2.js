class Rect2 {
  constructor (cx, cy, sx, sy) {
    this._name = 'rect2'
    this._cx = cx
    this._cy = cy
    this._sx = sx
    this._sy = sy
  }

  get name () {
    return this._name
  }

  set name (value) {
    return new Error(`Forbidden set name to ${value}`)
  }

  get cx () {
    return this._cx
  }

  set cx (value) {
    this._cx = value
  }

  get cy () {
    return this._cy
  }

  set cy (value) {
    this._cy = value
  }

  get sx () {
    return this._sx
  }

  set sx (value) {
    this._sx = value
  }

  get sy () {
    return this._sy
  }

  set sy (value) {
    this._sy = value
  }

  toString () {
    return `Rect2[cx=${this.cx},cy=${this.cy},sx=${this.sy},sy=${this.sy}]`
  }
}

module.exports = Rect2
