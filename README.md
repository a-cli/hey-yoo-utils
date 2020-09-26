# wu-utils

A JavaScript utility library for wu-cli project.

## Installation

```bash
npm install wu-utils
```

## Usage

### all utils

| util name | description | document |
|----|----|----|
| batchRegCommand | Batch registered command for package `commander` | [batchRegCommand](#batchRegCommand), [commander(github)](https://github.com/tj/commander.js#installation) |
| fsExtra | fs extra function | [fsExtra](#fsExtra) |
| parseArgs | Parse process argv to object | [parseArgs](#parseArgs) |
| pathExtra | path extra function | [pathExtra](#pathExtra) |

### batchRegCommand

Batch registered command by command config list:

```javascript
const { Command } = require('commander');
const { batchRegCommand } = require('wu-utils');

const commands = [
  {
    command: 'init',
    description: 'initial project',
    action: function () {},
  },
  {
    command: 'run [script]',
    // single option
    option: ['-d, --debug', 'run customize command  with [debug] mode'],
    description: 'run customize command',
    action: function () {},
  },
  {
    command: 'dev',
    // multiple options
	options: [
	  ['-d, --debug', 'dev command with [debug] mode'],
	  ['-t, --test', 'dev command with [test] mode'],
	],
	description: 'develop project',
	action: function () {},
    // other attribute you can add if program had
  },
];

const program = new Command();

program
  .version('1.0.0')
  .description('some description');

batchRegCommand(program, commands);

program.parse(process.argv);
```

### fsExtra

#### fsExtra.ensureDir

ensure the directory exists, it will create directory if isn't exist

```javascript
ensureDir('xxx/yyy/zzz');
```

### parseArgs

Parse process argv to object:

```javascript
const { parseArgs } = require('wu-utils');

const args = parseArgs(['debug', 'text=string', 'num=123', 'visible=true', 'disabled=false', 'val=null', 'id=undefined']);

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

### pathExtra

#### fsExtra.removeExtname

remove the path extname if it had

```javascript
removeExtname('index.js');
// return index

removeExtname('xxx/yyy/index.js');
// return xxx/yyy/index
```