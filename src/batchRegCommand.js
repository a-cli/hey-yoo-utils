/**
 * @param {Object} program (Command object's instance. Create by commander package)
 * @param {Array} list (command config list)
 * */
function batchRegCommand(program, list) {
	list.forEach((cfg) => {
		let moduleSource = cfg.source || null;
		delete cfg.source;
		const keys = Object.keys(cfg);
		let tempOne = program;
		keys.forEach((key) => {
			if (Array.isArray(cfg[key])) {
				tempOne = tempOne[key](...cfg[key]);
			} else {
				tempOne = tempOne[key](cfg[key]);
			}
		});
		if (!cfg.action && moduleSource) {
			let tempModule = require(moduleSource);
			tempOne.action(tempModule);
		}
	});
}

module.exports = batchRegCommand;