# ![GM-Com](./img/logo.png) gd-com

Establish communication between godot and nodejs with TCP and UDP !

[API godot v2](http://docs.godotengine.org/en/2.1/learning/features/misc/binary_serialization_api.html)
[API godot v3](http://docs.godotengine.org/en/stable/learning/features/misc/binary_serialization_api.html)

## Compatibility

Full compatibility with Godot v 2.1
Partial compatibility with Godot v 3.X

## How to install

`npm install --save gd-com`

## Usage

### ES6

```javascript
import { TCP, UDP, objects } from 'gd-com'

let wanted = 'test'

TCP.encode(wanted).then((encoded) => {
  return TCP.decode(encoded)
}).then((decoded) => {
  console.log(decoded)
})

UDP.encode(wanted).then((encoded) => {
  return UDP.decode(encoded)
}).then((decoded) => {
  console.log(decoded)
})
```

### ES5

```javascript
var gdCom = require('gd-com')
var wanted = 'test'

gdCom.TCP.encode(wanted).then((encoded) => {
  return gdCom.TCP.decode(encoded)
}).then((decoded) => {
  console.log(decoded)
})

gdCom.UDP.encode(wanted).then((encoded) => {
  return gdCom.UDP.decode(encoded)
}).then((decoded) => {
  console.log(decoded)
})
```

## Object Godot in JS

### ES6

```javascript
import { Vector2, Rect2 } from 'gd-com/object'
import Vector2 from 'gd-com/object/Vector2'
import Rect2 from 'gd-com/object/Rect2'

let v2 = new Vector2(3, 2)
let v2Encoded = udp.encode(v2)
let v2dencoded = udp.decode(v2Encoded)

let r2 = new Rect2(1, 2, 3, 4)
let r2Encoded = udp.encode(r2)
let r2dencoded = udp.decode(r2Encoded)
```

### ES5

```javascript
var gdCom = require('gd-com')

var v2 = new gdCom.objects.Vector2(3, 2)
var v2Encoded = gdCom.UDP.encode(v2)
var v2dencoded = gdCom.UDP.decode(v2Encoded)

var r2 = new gdCom.objects.Rect2(1, 2, 3, 4)
var r2Encoded = gdCom.UDP.encode(r2)
var r2dencoded = gdCom.UDP.decode(r2Encoded)
```

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Salsa2k** - *Initial work* - [godotserver](https://github.com/salsa2k/godotserver)
* **Tilican**

## TODO & CHANGELOG
[CHANGELOG](CHANGELOG.md)

[TODO](TODO.md)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Thanks
* Godot
* Godot Social Club
* GDQuest
* IG-Dev
