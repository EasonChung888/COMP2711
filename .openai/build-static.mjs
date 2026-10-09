import { cpSync, rmSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'courses/l2-5');
const destination = path.join(root, 'dist');
if (!statSync(path.join(source, 'index.html')).isFile()) {
  throw new Error('Missing course website entry point');
}
rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, {
  recursive: true,
  filter: filename => {
    const parts = path.relative(source, filename).split(path.sep);
    return parts[0] !== 'tools' && !parts.some(part => part.startsWith('.'));
  },
});
console.log('Prepared COMP2711 static website in dist/');
