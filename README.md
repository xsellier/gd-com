# gd-com

Establish communication between godot and nodejs with TCP and UDP !

[API godot v2](http://docs.godotengine.org/en/2.1/learning/features/misc/binary_serialization_api.html)
[API godot v3](http://docs.godotengine.org/en/stable/learning/features/misc/binary_serialization_api.html)

## Compatibility

Full compatibility with Godot v 2.1
Partial compatibility with Godot v 3.X

## How to install

`npm install --save gd-com`

## Usage
ES6
```javascript
import { tcp, udp, object } from 'gd-com';
import tcp from 'gd-com/tcp';
import udp from 'gd-com/udp';

let wanted = "test";
console.log(wanted);
let encoded = tcp.encode(wanted);
console.log(encoded);
let decoded = tcp.decode(encoded);
console.log(decoded);


let wanted = "test";
console.log(wanted);
let encoded = udp.encode(wanted);
console.log(encoded);
let decoded = udp.decode(encoded);
console.log(decoded);
```

ES5
```javascript
var gdCom = require('gd-com');

var wanted = "test";
console.log(wanted);
var encoded = gdCom.tcp.encode(wanted);
console.log(encoded);
var decoded = gdCom.tcp.decode(encoded);
console.log(decoded);

var wanted = "test";
console.log(wanted);
var encoded = gdCom.udp.encode(wanted);
console.log(encoded);
var decoded = gdCom.udp.decode(encoded);
console.log(decoded);
```

## Object Godot in JS

ES6
```javascript
import { Vector2, Rect2 } from 'gd-com/object';
import Vector2 from 'gd-com/object/Vector2';
import Rect2 from 'gd-com/object/Rect2';

let v2 = new Vector2(3, 2);
let v2Encoded = udp.encode(v2);
let v2dencoded = udp.decode(v2Encoded);

let r2 = new Rect2(1, 2, 3, 4);
let r2Encoded = udp.encode(r2);
let r2dencoded = udp.decode(r2Encoded);
```

ES5
```javascript
var gdCom = require('gd-com');

var v2 = new gdCom.object.Vector2(3, 2);
var v2Encoded = gdCom.udp.encode(v2);
var v2dencoded = gdCom.udp.decode(v2Encoded);

var r2 = new gdCom.object.Rect2(1, 2, 3, 4);
var r2Encoded = gdCom.udp.encode(r2);
var r2dencoded = gdCom.udp.decode(r2Encoded);
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
