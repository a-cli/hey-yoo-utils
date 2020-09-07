const fs = require('fs');

function ensureDir(path) {
	if (fs.existsSync(path)) {
		const stat = fs.statSync(path);
		if (stat.isDirectory()) {
			return;
		}
	}
	fs.mkdirSync(path);
}

module.exports = {
	ensureDir,
};
