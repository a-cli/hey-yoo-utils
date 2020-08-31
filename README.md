# wu-utils

A JavaScript utility library for wu-node project.

## Installation

```bash
npm install wu-utils
```

## Usage

### all utils

| util name | description | document |
|----|----|----|----|
| batchRegCommand | Batch registered command for package commander | [batchRegCommand](#batchRegCommand), [commander github](https://github.com/tj/commander.js#installation) |
| chalk | Terminal string styling done right | [chalk github](https://github.com/chalk/chalk) |
| parseArgs | Parse process argv to object | [parseArgs](#parseArgs) |
| std | Console print terminal string styling | [std](#parseArgs) |

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

### parseArgs

Parse process argv to object:

```javascript
const { parseArgs } = require('wu-utils');

const args = parseArgs(['debug', 'text=string', 'num=123', 'visible=true', 'disabled=false', 'val=null', 'id=undefined']);

console.log(args);
/**
* {
*   debug: true,
*   test: 'string',
*   num: '123',
*   visible: true,
*   disabled: false,
*   val: null,
*   id: undefiend,
* }
*/
```

### std

The simple way to get started with std:

```javascript
const { std } = require('wu-utils');
// print label and content by std types(log, info, success, warn, error)
std.log('hello world!');
std.info('hello world!');
std.success('hello world!');
std.warn('hello world!');
std.error('hello world!');
// print customize label and content by a std special type(print)
std.print(' LABEL ', 'hello world!');
// print content by std colors(white, blue, green, yellow, red)
std.white('hello world!');
std.blue('hello world!');
std.green('hello world!');
std.yellow('hello world!');
std.red('hello world!');
```

It can freely combine and use std like this:

```javascript
const { std } = require('wu-utils');

std.red.log('hello world!');
std.green.info('hello world!');
std.white.success('hello world!');
std.warn.blue('hello world!');
std.error.yellow('hello world!');
std.print.green(' LABEL ', 'hello world!');
```