import readFile from './readFile';

export default function readJson(
  filepath: string
): { [key: string]: any } | undefined {
  const fileStr = readFile(filepath);
  if (fileStr) {
    return JSON.parse(fileStr);
  }
}
