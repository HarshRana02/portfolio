const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('out directory does not exist, skipping fix-export.');
  process.exit(0);
}

// Ensure .nojekyll exists so GitHub Pages serves _next directory
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// 1. Find all CSS files in out/_next/static/css/
const cssDir = path.join(outDir, '_next', 'static', 'css');
let combinedCss = '';

if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
  for (const file of cssFiles) {
    const filePath = path.join(cssDir, file);
    combinedCss += fs.readFileSync(filePath, 'utf8') + '\n';
  }
}

// 2. Process all HTML files in out
function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Inline the compiled CSS into <head>
  if (combinedCss && !content.includes('id="inlined-tailwind-css"')) {
    content = content.replace(
      '</head>',
      `<style id="inlined-tailwind-css">\n${combinedCss}\n</style></head>`
    );
  }

  // Convert absolute root paths to relative paths so file:// opening works out-of-the-box
  content = content.replace(/href="\/_next\//g, 'href="./_next/');
  content = content.replace(/src="\/_next\//g, 'src="./_next/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/logo\.png"/g, 'href="./logo.png"');
  content = content.replace(/src="\/logo\.png"/g, 'src="./logo.png"');
  content = content.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');
  content = content.replace(/href="\/apple-touch-icon\.png"/g, 'href="./apple-touch-icon.png"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Inlined CSS and fixed relative paths for: ${filePath}`);
}

const htmlFiles = fs.readdirSync(outDir).filter(f => f.endsWith('.html'));
for (const htmlFile of htmlFiles) {
  processHtmlFile(path.join(outDir, htmlFile));
}

console.log('Static export fix completed successfully.');

