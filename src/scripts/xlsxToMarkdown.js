const fs = require('fs');
const path = require('path');
const markdownTables = require('markdown-tables');
const papa = require('papaparse');

function xlsxToMarkdown(xlsxName) {
    // Convert Excel to JS array of rows
    const rowsPromise = markdownTables.getInput(path.join(__dirname, `../spreadsheets/${xlsxName}.xlsx`));
    rowsPromise.then(rows => {
        // Process rows by adding backticks for code, italics for descriptions, and 
        //     line breaks between commands
        const processedRows = rows.map(processRow);

        // JS array of rows to CSV
        fs.writeFileSync(path.join(__dirname, `../csv/${xlsxName}.csv`), papa.unparse(processedRows));

        // CSV to markdown table
        markdownTables.markdownTables(path.join(__dirname, `../csv/${xlsxName}.csv`)).then(res => {
            fs.writeFileSync(path.join(__dirname, `../../tables/${xlsxName}.md`), res);
        });
    });
};

function processRow(row) {
    if (row['Command(s)'].startsWith('(CODEBLOCK)')) {
        const tagRemoved = row['Command(s)'].substring('(CODEBLOCK)'.length);
        const lineBreaksReplaced = tagRemoved.replace(/\r\n/g, '<br/>');  // Replace all \r\n with br tag

        row['Command(s)'] = '<pre>' + lineBreaksReplaced + '</pre>';
        return row;
    }

    const commands = row['Command(s)'].split('\r\n');

    const processedCommands = commands.map(command => {
        if (command.charAt(0) === '(') {
            return '<i>' + command + '</i>';
        }
        return '`' + command + '`';
    });

    row['Command(s)'] = processedCommands.join('<br/>');
    return row;
};

module.exports = xlsxToMarkdown;
