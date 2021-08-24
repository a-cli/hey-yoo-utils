import fs from 'fs';

function ensureDir(path: string): void {
  if (fs.existsSync(path)) {
    const stat = fs.statSync(path);
    if (stat.isDirectory()) {
      return;
    }
  }
  fs.mkdirSync(path);
}

export default ensureDir;
