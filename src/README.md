# Source
You've found the source folder! Editing markdown tables is a big pain. Instead I edit them in Excel spreadsheets and run a script to turn them into markdown tables.

## Editing locally
1. `git clone https://github.com/liaocanada/developers-cheat-sheet.git`
2. `cd ./developers-cheat-sheet`
3. `node src/scripts/index.js` 
4. The tables will be generated in the `tables` folder.
5. To update the tables, change the Excel spreadsheets in `src/spreadsheets/`, and run `node src/scripts/index.js` again. 

Unfortunately you'll have to edit the table of contents in the README manually.