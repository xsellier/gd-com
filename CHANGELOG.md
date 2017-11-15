## CHANGELOG

* v0.2.1
  * Bugfix: Decode function used a wrong length to decode data. All the types use now max(offset) + length as default length value
  * Update the examples

* v0.2.0
  * Promisify decode/encode functions to reduce the call stack size
  * Added more complex data tests (deep json and mixed data types)

* v0.1.1
  * README.md: Update the README.md file
  * package.json: Bump the package version

* v0.1.0
  * example: Fix typo
  * Lint: Lint the code, using standardJS instead of ESLint
  * Misc: Remove dependency of Babel and Gulp
  * Directory: Move src/ to lib/ and cancel the minify of the code
  * gitignore: Add the LICENSE to the gitignore and also the packge-lock.json file
  * TODO: Add the endianness to the TODO list
  * Tests: Refactor the test to check that encoding/decoding does not loss data (except for float precision)
  * Examples: Refactor the examples to use only the current valid example of what we can do without babel
  * Decode/Encode: Refactor the code to be more functional

* v0.0.8 bug export

* v0.0.7
  * Encode
    * Rect2
    * Vector2
  * unit tests
  * modify library build system
  * add GDScript for v3
  * add Nodejs script ES6

* v0.0.6 - bug encode dictionnary

* v0.0.5 - bug recursive

* v0.0.4 - Add UDP support

* v0.0.3 - Bug npm repo

* v0.0.2 - Bug export

* v0.0.1 - First release
  * Encode
    * Null
    * Boolean
    * Integer
    * Float
    * String
    * Array
    * Dictionnary
  * Decode
    * Null
    * Boolean
    * Integer
    * Float
    * String
    * Vector2
    * Rect2
    * Vector3
    * Matrix32
    * Plane
    * Quaternion
    * Aabb 
    * Matrix33
    * Transform
    * Color
    * Dictionnary
    * Array
