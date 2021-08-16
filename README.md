# hey-yoo-utils

A JavaScript utility library.

## Installation

pnpm

```shell
pnpm add hey-yoo-utils
```

npm

```shell
npm i hey-yoo-utils
```

yarn

```shell
yarn add hey-yoo-utils
```

## Usage

- All utils
  - [parseArgs](#parseArgs)
  - [runFunc](#runFunc)
  - [typeOf](#typeOf)
  - fsExtra
    - [ensureDir](#ensureDir)
    - [remove](#remove)
  - pathExtra
    - [removeExtname](#removeExtname)

### parseArgs

Parse process argv to object:

```javascript
const { parseArgs } = require('hey-yoo-utils');

const args = parseArgs([
  'debug',
  'text=string',
  'num=123',
  'visible=true',
  'disabled=false',
  'val=null',
  'id=undefined',
]);

console.log(args);
/*
{
  debug: true,
  test: 'string',
  num: '123',
  visible: true,
  disabled: false,
  val: null,
  id: undefiend,
}
*/
```

### runFunc

Run the function and pass parameters to it.

```javascript
const { runFunc } = require('hey-yoo-utils');

runFunc(() => {}, 'params1', 'params2');

// This is not running.
runFunc(undefined, 'params1', 'params2');
```

### typeOf

Get object type.

```javascript
const { typeOf } = require('hey-yoo-utils');

typeOf('foo bar');
// return 'string
```

### ensureDir

Ensure the directory exists, it will create directory if isn't exist.

```javascript
const { fsExtra } = require('hey-yoo-utils');

fsExtra.ensureDir('xxx/yyy/zzz');
```

### remove

Delete directory or file.

```javascript
const { fsExtra } = require('hey-yoo-utils/fsExtra');

fsExtra.remove('xxx/yyy/zzz');
```

### removeExtname

Remove the path extname if it had.

```javascript
const { pathExtra } = require('hey-yoo-utils');

pathExtra.removeExtname('index.js');
// return index

pathExtra.removeExtname('xxx/yyy/index.js');
// return xxx/yyy/index
```
