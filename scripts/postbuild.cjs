const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('[postbuild] dist/index.html not found!');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

// List of all client-side routes in the application
const routes = ['works', 'services', 'about', 'contact'];

routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  // 1. /<route>/index.html
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  // 2. /<route>.html
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexContent);
  console.log(`[postbuild] Generated static entry for /${route}`);
});

// 3. Fallback /404.html for any unmapped paths
fs.writeFileSync(path.join(distDir, '404.html'), indexContent);
console.log('[postbuild] Generated fallback dist/404.html');
console.log('[postbuild] Complete! SPA routes are statically backed.');
