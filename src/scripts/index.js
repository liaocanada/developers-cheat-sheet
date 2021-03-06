const fs = require('fs');
const path = require('path');
const xlsxToMarkdown = require('./xlsxToMarkdown');

fs.readdirSync(path.join(__dirname, '../spreadsheets/')).forEach(filename => {
    // Ignore temp Excel lock files
    if (filename.startsWith('~$')) return;

    const extensionRemoved = filename.split('.')[0];
    console.log(`Converting ${extensionRemoved}.xlsx to markdown table --> /tables/${extensionRemoved}.md...`);
    xlsxToMarkdown(extensionRemoved);
});

console.log('Done!');
