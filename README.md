# gd-com

Establish communication between godot and nodejs

TCP and UDP !

API godot : http://docs.godotengine.org/en/stable/learning/features/misc/binary_serialization_api.html

## How to install

`npm install --save gd-com`

## Usage

ES6
```javascript
import { tcp } from 'gd-com';

let wanted = "test";
console.log(wanted);
let encoded = tcp.encode(wanted);
console.log(encoded);
let decoded = tcp.decode(encoded);
console.log(decoded);

// OR

import { udp } from 'gd-com';

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
let encoded = gdCom.tcp.encode(wanted);
console.log(encoded);
let decoded = gdCom.tcp.decode(encoded);
console.log(decoded);

// OR

var wanted = "test";
console.log(wanted);
let encoded = gdCom.udp.encode(wanted);
console.log(encoded);
let decoded = gdCom.udp.decode(encoded);
console.log(decoded);

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
Thx to Godot and Binogure
