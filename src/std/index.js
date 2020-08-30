const {
	colors,
	types,
	colorCfg,
	typeCfg,
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
			stdStorage.setType(p)
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

		const [ msg, ...rest ] = argArray;
		let args = [];

		if (type) {
			if (!color) {
				color = typeCfg[type].defaultColor;
			}
			args = [
				colorCfg[color].label(typeCfg[type].label),
				colorCfg[color].content(adapter(msg).trim()),
			];

			return console.log(...args, ...rest);
		}

		if (color) {
			return console.log(colorCfg[color].content(adapter(msg).trim()), ...rest);
		}

		return console.log(...argArray);
	}
});

module.exports = std;