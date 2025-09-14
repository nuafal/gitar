import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
import crypto  from 'node:crypto';

const add = (files) => {
    const gitarPath = path.resolve('.gitar');
    const indexPath = path.join(gitarPath, 'index');

    let index = {};
    if (fs.existsSync(indexPath)) {
        index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    }

    files.forEach(file => {
        const content = fs.readFileSync(file);
        const hash = crypto.createHash('sha1').update(content).digest('hex');

        fs.writeFileSync(path.join(gitarPath, 'objects', hash), content);

        index[file] = hash;

        if (!fs.existsSync(file)) {
            console.log(chalk.red(`File ${file} does not exist.`));
            return;
        }
    });

    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
    console.log(chalk.green('Files added to staging area.'));

}

export default add;