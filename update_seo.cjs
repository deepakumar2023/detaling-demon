const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/services');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (!content.includes('import SEO')) {
      // Add import at the top
      content = `import SEO from '../../components/SEO';\n` + content;
      
      // Extract the title from the h1
      const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      let title = h1Match ? h1Match[1].trim() : file.replace('.jsx', '');
      
      // Clean up title (remove line breaks if any)
      title = title.replace(/\n/g, ' ').replace(/\s+/g, ' ');
      
      // Replace the first return ( <div ...> with the SEO component
      content = content.replace(/(<div[^>]*>)/, `$1\n      <SEO title="${title} | Detailing Demons" description="Learn more about our ${title} services." />`);
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
});
