const fs = require('fs');
const path = require('path');

function ensureDir(path) {
	if (fs.existsSync(path)) {
		const stat = fs.statSync(path);
		if (stat.isDirectory()) {
			return;
		}
	}
	fs.mkdirSync(path);
}

function remove(tagPath) {
	if (fs.existsSync(tagPath)) {
		const stats = fs.statSync(tagPath);
		if (stats.isFile(tagPath)) {
			fs.unlinkSync(tagPath);
		} else if (stats.isDirectory()) {
			const fileList = fs.readdirSync(tagPath);
			if (fileList.length > 0) {
				fileList.forEach((file) => {
					const filePath = path.join(tagPath, file);
					remove(filePath);
				});
			}
			fs.rmdirSync(tagPath);
		}
	}
}

module.exports = {
	ensureDir,
	remove,
};
