import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
const files = ['index.html', 'styles.css', 'assets', 'profile_image.png', 'CV.pdf', '.nojekyll', 'robots.txt', 'sitemap.xml'];

// Check the inputs before replacing an earlier build. Only public files ship.
await Promise.all(files.map((file) => stat(resolve(root, file))));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) {
  await cp(resolve(root, file), resolve(output, file), { recursive: true });
}
console.log('Homepage built in dist/');
