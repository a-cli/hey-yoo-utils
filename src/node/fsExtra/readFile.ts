import fs from 'fs';

function readFile(filepath: string): string | undefined {
  if (fs.existsSync(filepath)) {
    let stat = fs.statSync(filepath);
    if (stat.isSymbolicLink()) {
      filepath = fs.readlinkSync(filepath);
      stat = fs.statSync(filepath);
    }
    if (stat.isFile()) {
      return fs.readFileSync(filepath, 'utf8');
    }
  }
}

export default readFile;
