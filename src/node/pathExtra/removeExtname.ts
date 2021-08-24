import path from 'path';

export default function removeExtname(argPath: string): string {
  let extname = path.extname(argPath);
  if (extname.length) {
    argPath = argPath.slice(0, -extname.length);
  }
  return argPath;
}
