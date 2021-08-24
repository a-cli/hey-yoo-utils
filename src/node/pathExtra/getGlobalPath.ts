import path from 'path';
import { fileURLToPath } from 'url';

export default function getGlobalPath(metaUrl: string) {
  const __filename = fileURLToPath(metaUrl);
  return {
    __filename,
    __dirname: path.dirname(__filename),
  };
}
