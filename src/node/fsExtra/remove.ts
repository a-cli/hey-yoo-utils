import fs from 'fs';
import path from 'path';

function remove(tagPath: string): void {
  if (fs.existsSync(tagPath)) {
    const stats = fs.statSync(tagPath);
    if (stats.isFile()) {
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

export default remove;
