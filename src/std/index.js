const {
	colors,
	types,
	colorCfg,
	typeCfg,
	print,
} = require('./config');

function adapter(msg) {
	if (msg) {
		if (typeof msg === 'string') {
			return msg;
		}
		return JSON.stringify(msg);
	}
	return '';
}

const stdStorage = {
	_type: null,
	_color: null,
	setType(type) {
		this._type = type;
	},
	getType() {
		return this._type;
	},
	setColor(color) {
		this._color = color;
	},
	getColor() {
		return this._color;
	},
	clear() {
		this._type = null;
		this._color = null;
	}
};

const std = new Proxy(function () {}, {
	get(target, p, receiver) {
		if (types.includes(p)) {
			stdStorage.setType(p);
			return receiver;
		}
		if (colors.includes(p)) {
			stdStorage.setColor(p);
			return receiver;
		}
		return undefined;
	},
	apply(target, thisArg, argArray) {
		let type = stdStorage.getType();
		let color = stdStorage.getColor();
		stdStorage.clear();

		if (argArray.length === 0 && !type) {
			return;
		}

		let [ msg, ...rest ] = argArray;

		if (type) {
			if (!color) {
				color = typeCfg[type].defaultColor;
			}

			let arg = [
				colorCfg[color].label(typeCfg[type].label),
				colorCfg[color].content(adapter(msg).trim()),
			];

			if (type === print) {
				let label;
				[ label, msg, ...rest ] = argArray;
				arg = [ colorCfg[color].label(label) ];
				if (argArray.length > 1) {
					arg.push(colorCfg[color].content(adapter(msg).trim()));
				}
			}

			return console.log(...arg, ...rest);
		}

		if (color) {
			return console.log(
				colorCfg[color].content(adapter(msg).trim()),
				...rest
			);
		}

		return console.log(...argArray);
	}
});

module.exports = std;