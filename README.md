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
    - [readFile](#readFile)
    - [readJson](#readJson)
    - [remove](#remove)
  - pathExtra
    - [getGlobalPath](#getGlobalPath)
    - [removeExtname](#removeExtname)

### parseArgs

Parse process argv to object:

```javascript
import { parseArgs } from 'hey-yoo-utils';

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
import { runFunc } from 'hey-yoo-utils';

runFunc(() => {}, 'params1', 'params2');

// This is not running.
runFunc(undefined, 'params1', 'params2');
```

### typeOf

Get object type.

```javascript
import { typeOf } from 'hey-yoo-utils';

typeOf('foo bar');
// return 'string
```

### ensureDir

Ensure the directory exists, it will create directory if isn't exist.

```javascript
import { fsExtra } from 'hey-yoo-utils';

fsExtra.ensureDir('xxx/yyy/zzz');
```

### readFile

read JSON file and return file string.

```javascript
import { fsExtra } from 'hey-yoo-utils';

const file = fsExtra.readFile('package.json');
```

### readJson

read JSON file and return JSON Object.

```javascript
import { fsExtra } from 'hey-yoo-utils';

const pkg = fsExtra.readJson('package.json');
```

### remove

Delete directory or file.

```javascript
import { fsExtra } from 'hey-yoo-utils';

fsExtra.remove('xxx/yyy/zzz');
```

### getGlobalPath

get __filename and __dirname values.

```javascript
import { pathExtra } from 'hey-yoo-utils';

const { __filename, __dirname } = pathExtra.getGlobalPath(import.meta.url);
```

### removeExtname

Remove the path extname if it had.

```javascript
import { pathExtra } from 'hey-yoo-utils';

pathExtra.removeExtname('index.js');
// return index

pathExtra.removeExtname('xxx/yyy/index.js');
// return xxx/yyy/index
```
