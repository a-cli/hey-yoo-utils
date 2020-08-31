const chalk = require('chalk');

const white = 'white';
const blue = 'blue';
const green = 'green';
const yellow = 'yellow';
const red = 'red';

const log = 'log';
const info = 'info';
const success = 'success';
const warn = 'warn';
const error = 'error';
const print = 'print';

const blackColor = chalk.rgb(0, 0 , 0);

const colorCfg = {
	[white]: {
		label: blackColor.bgWhiteBright.bold,
		content: chalk.whiteBright,
	},
	[blue]: {
		label: blackColor.bgBlueBright.bold,
		content: chalk.blueBright,
	},
	[green]: {
		label: blackColor.bgGreenBright.bold,
		content: chalk.greenBright,
	},
	[yellow]: {
		label: blackColor.bgYellow.bold,
		content: chalk.yellow,
	},
	[red]: {
		label: blackColor.bgRedBright.bold,
		content: chalk.redBright,
	},
};

const typeCfg = {
	[log]: {
		label: ' LOG ',
		defaultColor: white,
	},
	[info]: {
		label: ' INFO ',
		defaultColor: blue,
	},
	[success]: {
		label: ' SUCCESS ',
		defaultColor: green,
	},
	[warn]: {
		label: ' WARN ',
		defaultColor: yellow,
	},
	[error]: {
		label: ' ERROR ',
		defaultColor: red,
	},
	[print]: {
		label: null,
		defaultColor: white,
	},
};

module.exports = {
	colors: [white, blue, green, yellow, red],
	types: [log, info, success, warn, error, print],
	colorCfg,
	typeCfg,
	print,
};