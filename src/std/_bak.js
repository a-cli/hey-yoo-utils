const chalk = require('chalk');

const blackColor = chalk.rgb(0, 0 , 0);

function adapter(msg) {
	if (msg) {
		if (typeof msg === 'string') {
			return msg;
		}
		return JSON.stringify(msg);
	}
	return '';
}

function log(msg, ...rest) {
	console.log(
		blackColor.bgWhiteBright.bold(' LOG '),
		chalk.whiteBright(adapter(msg).trim()),
		...rest
	);
}

function info(msg, ...rest) {
	console.log(
		blackColor.bgBlueBright.bold(' INFO '),
		chalk.blueBright(adapter(msg).trim()),
		...rest
	);
}

function success(msg, ...rest) {
	console.log(
		blackColor.bgGreenBright.bold(' SUCCESS '),
		chalk.greenBright(adapter(msg).trim()),
		...rest
	);
}

function warn(msg, ...rest) {
	console.log(
		blackColor.bgYellow.bold(' WARN '),
		chalk.yellow(adapter(msg).trim()),
		...rest
	);
}

function error(msg, ...rest) {
	console.log(
		blackColor.bgRedBright.bold(' ERROR '),
		chalk.redBright(adapter(msg).trim()),
		...rest
	);
}

module.exports = {
	log,
	info,
	success,
	warn,
	error,
};
