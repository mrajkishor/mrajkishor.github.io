const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const readline = require('readline');

const logFilePath = path.join('E:\\mrajkishor.github.io', 'commitLogs', `automation_${Date.now()}.log`);

function logAndPrint(message) {
    console.log(message);
    fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${message}\n`);
}

function runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
        const process = exec(command, options, (error, stdout, stderr) => {
            if (error) {
                logAndPrint(`Error: ${error.message}`);
                return reject(error);
            }
            if (stderr) {
                logAndPrint(`stderr: ${stderr}`);
            }
            logAndPrint(`stdout: ${stdout}`);
            resolve(stdout);
        });

        process.stdout.on('data', data => logAndPrint(`stdout: ${data}`));
        process.stderr.on('data', data => logAndPrint(`stderr: ${data}`));
    });
}

async function main() {
    try {
        const rootPath = 'E:\\mrajkishor.github.io';
        const appPath = path.join(rootPath, 'SPA', 'my-app');
        const buildPath = path.join(appPath, 'build');
        const indexPath = path.join(rootPath, 'index.html');

        // Ensure log directory exists
        fs.mkdirSync(path.join(rootPath, 'commitLogs'), { recursive: true });

        // Step 2: Run npm build
        logAndPrint("Running npm build...");
        await runCommand('npm run build', { cwd: appPath });
        logAndPrint("npm build completed successfully.");

        // Step 3 & 4: Copy build files
        logAndPrint("Copying build files...");
        fse.copySync(buildPath, rootPath, { overwrite: true });
        logAndPrint("Build files copied successfully.");

        // Step 5 & 6: Modify index.html
        logAndPrint("Modifying index.html...");
        const scriptContent = `
<!-- Start Single Page Apps for GitHub Pages -->
<script type="text/javascript">
// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
// This script checks to see if a redirect is present in the query string,
// converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))
</script>
<!-- End Single Page Apps for GitHub Pages -->`;

        let indexContent = fs.readFileSync(indexPath, 'utf-8');
        if (!indexContent.includes('</head>')) {
            throw new Error('</head> tag not found in index.html');
        }
        indexContent = indexContent.replace('</head>', `${scriptContent}\n</head>`);
        fs.writeFileSync(indexPath, indexContent, 'utf-8');
        logAndPrint("index.html modified successfully.");

        // Prompt for commit message
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter the commit message: ', async (commitMessage) => {
            rl.close();

            // Step 8: Git add
            logAndPrint("Running git add...");
            await runCommand('git add .', { cwd: rootPath });

            // Step 9: Git commit
            logAndPrint("Running git commit...");
            await runCommand(`git commit -m "${commitMessage}"`, { cwd: rootPath });

            // Step 10: Git push
            logAndPrint("Running git push...");
            await runCommand('git push', { cwd: rootPath });

            // Redirect to GitHub Actions page
            logAndPrint("Redirecting to GitHub Actions page...");
            await runCommand(`start "" "https://github.com/mrajkishor/mrajkishor.github.io/actions"`);
        });
    } catch (error) {
        logAndPrint(`Automation process failed: ${error.message}`);
    }
}

main();
