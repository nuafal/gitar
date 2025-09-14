import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';

const init = () => {
    if (fs.existsSync('.gitar')) {
        console.log(chalk.red('A gitar repository already exists in this directory.'));
        process.exit(1);
    }

    fs.mkdirSync('.gitar');
    fs.mkdirSync('.gitar/objects');
    fs.mkdirSync('.gitar/refs');

    fs.writeFileSync('.gitar/HEAD', 'ref: refs/heads/main\n');
    
    console.log(chalk.green('Initialized empty .gitar repository in ' + '.gitar'));
}

export default init;