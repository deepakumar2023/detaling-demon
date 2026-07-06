const fs = require('fs');
const path = require('path');

function replaceFileContent(filePath, replacer) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = replacer(content);
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

const pagesDir = path.join(__dirname, 'src/pages');

// Fix ContactPage.jsx
replaceFileContent(path.join(pagesDir, 'ContactPage.jsx'), (content) => {
  content = content.replace(/import Footer from '[^']+';\n/, '');
  content = content.replace(/\s*<Footer \/>\s*/, '\n');
  content = content.replace(/className="pt-32/, 'className="pt-48');
  return content;
});

// Fix AboutPage.jsx
replaceFileContent(path.join(pagesDir, 'AboutPage.jsx'), (content) => {
  content = content.replace(/import Footer from '[^']+';\n/, '');
  content = content.replace(/\s*<Footer \/>\s*/, '\n');
  // Remove pt-20 from main if it's there, since Hero is h-screen
  content = content.replace(/<main className="pt-20">/, '<main className="pt-0">');
  return content;
});

// Fix PortfolioPage.jsx
replaceFileContent(path.join(pagesDir, 'PortfolioPage.jsx'), (content) => {
  content = content.replace(/import Footer from '[^']+';\n/, '');
  content = content.replace(/\s*<Footer \/>\s*/, '\n');
  return content;
});

// Fix HomePage.jsx and ServicesPage.jsx just in case
replaceFileContent(path.join(pagesDir, 'HomePage.jsx'), (content) => {
  content = content.replace(/import Footer from '[^']+';\n/, '');
  content = content.replace(/\s*<Footer \/>\s*/, '\n');
  return content;
});

replaceFileContent(path.join(pagesDir, 'ServicesPage.jsx'), (content) => {
  content = content.replace(/import Footer from '[^']+';\n/, '');
  content = content.replace(/\s*<Footer \/>\s*/, '\n');
  return content;
});

// Fix 18 service pages
const servicesDir = path.join(pagesDir, 'services');
const serviceFiles = fs.readdirSync(servicesDir);

serviceFiles.forEach(file => {
  if (file.endsWith('.jsx')) {
    replaceFileContent(path.join(servicesDir, file), (content) => {
      content = content.replace(/import Navbar from '[^']+';\n/, '');
      content = content.replace(/import Footer from '[^']+';\n/, '');
      content = content.replace(/\s*<Navbar \/>\s*/, '\n      ');
      content = content.replace(/\s*<Footer \/>\s*/, '\n    ');
      // Change pt-32 to pt-48 for better spacing under the large Navbar
      content = content.replace(/pt-32/, 'pt-48');
      return content;
    });
  }
});
