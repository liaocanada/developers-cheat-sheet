# Developer's Cookbook
A collection of useful commands, snippets, and reference links used in the average day of a developer. 

Please note these are only based on my personal experiences. 
These commands are intended to be used as reference material, for the purposes of refreshing your memory. If you don't know what a command does, don't run it until you've looked it up and understand what it does.

Please also feel free to check out my [Administrator's Cookbook](https://github.com/liaocanada/Administrators-Cookbook).

## Table of Contents
1. [Git](#git)
2. [Node](#node)
    * [Installation](#node---installation)
3. [Java](#java)
4. [AWS](#AWS)

## Git
| Action                         | Command                                                                                                                                                               | Description |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Make a commit                  | `git add .`<br/> `git commit -m "<commit-message>"`<br/> `git pull`<br/> `git push`                                                                                   |             |
| Switch branches                | `git branch`<br/> `git checkout <existing-local-branch>`<br/> `git checkout -b <new-local-branch>`<br/> `git checkout --track origin/<existing-remote-branch>`        |             |
| Stash uncommitted changes      | `git stash`<br/> <i>(switch branches)</i><br/> `git stash apply`                                                                                                      |             |
| Undo a commit                  | `git reset --soft HEAD~1`<br/> <i>(or)</i><br/> `git reset --hard HEAD~1`                                                                                             |             |
| Add a remote                   | `git remote add origin https://github.com/<username>/<repo-name>.git`<br/> <i>(make a commit)</i><br/> `git push --set-upstream origin master`                        |             |
| Rename a branch (local+remote) | `git checkout <old-branch-name>`<br/> `git branch -m <new-branch-name>`<br/> `git push origin --delete <old-branch-name>`<br/> `git push origin -u <new-branch-name>` |             |
| Delete a branch (local+remote) | `git push origin --delete <remote-branch-name>`<br/> `git branch -d <local-branch-name>`                                                                              |             |


## Node
| Action                                     | Command                                               | Description |
|--------------------------------------------|-------------------------------------------------------|-------------|
| Install/add dependencies in `package.json` | `npm install`<br/> `npm install --save <some-module>` |             |
| Start a web application                    | `npm start`<br/> `npm run start`                      |             |
| Run scripts defined in `package.json`      | `npm run <script>`<br/> `npm run test`                |             |
| Run a single file                          | `node <path-to-some-file>`<br/> `node server.js`      |             |
  
### Node - Installation
| Action                   | Command                                                                                                                                                                                                                                                                                         | Description |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Install node (Mac/Linux) | <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh &#124; bash</code><br/> `export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`<br/> `nvm install --lts`<br/> `npm --version`<br/> `node --version` |             |


## Java
| Action            | Command                                                                                                                                        | Description |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Run a program     | <i>(Download Java and set PATH variable)</i><br/>`javac <Java-file>.java`<br/> `java <Java-file>`<br/> `java <Java-file> <arg0> <arg1> <arg2>` |             |
| Generate Javadocs | `javadoc -d <Javadoc-destination-path> <Java-file>.java`                                                                                       |             |

## AWS
| Action                                              | Code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Start a Lambda function compatible with API Gateway | `exports.handler = async (event, context, callback) => {`<br/> &emsp;`const hasError = event['queryStringParameters']['myErrorParam'];`<br/> &emsp;`if (hasError === 'yes') {`<br/> &emsp;&emsp;`callback(new Error('My error message'));`<br/> &emsp;`else {`<br/> &emsp;&emsp;`const response = {`<br/> &emsp;&emsp;&emsp;`statusCode: 200,`<br/> &emsp;&emsp;&emsp;`headers: {"Access-Control-Allow-Origin": "*"},`<br/> &emsp;&emsp;&emsp;`body: JSON.stringify({success: true}),`<br/> &emsp;&emsp;&emsp;`isBase64Encoded: false`<br/> &emsp;&emsp;`}`<br/> &emsp;&emsp;`callback(null, response);`<br/> `}` |             |
