import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import chalk from "chalk";

const commit = async () => {
    const { message } = await inquirer.prompt([
        {
            type: 'input',
            name: 'message',
            message: 'Enter commit message:',
            validate: input => input ? true : 'Commit message cannot be empty.'
        }
    ]); 

    const gitarPath = path.resolve('.gitar');
    const indexPath = path.join(gitarPath, 'index');

    const index = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf-8')) : {};
    if (Object.keys(index).length === 0) {
        console.log(chalk.red('No changes added to commit. Use "gitar add <files>" to stage files.'));
        return;
    }

    const tree = { files: index };
    const treeHash = crypto.createHash('sha1').update(JSON.stringify(tree)).digest('hex');
    fs.writeFileSync(path.join(gitarPath, 'objects', treeHash), JSON.stringify(tree));

    let parentHash = null;

    const headRef = fs.readFileSync(path.join(gitarPath, 'HEAD'), 'utf-8').trim().split(' ')[1];
    const branchFile = path.join(gitarPath, headRef.split(': ')[1]);

    if (fs.existsSync(branchFile)) {
        parentHash = fs.readFileSync(branchFile, 'utf-8').trim();
    }

    const commit = {
        tree: treeHash,
        parent: parentHash,
        author: "Naufal Lofty <naufallofty@gmail.com>",
        message,
        timestamp: new Date().toISOString()
    };

    const commitHash = crypto.createHash('sha1').update(JSON.stringify(commit)).digest('hex');
    fs.writeFileSync(path.join(gitarPath, 'objects', commitHash), JSON.stringify(commit));

    fs.writeFileSync(branchFile, commitHash);

    console.log(chalk.green(`Committed as ${commitHash.slice(0, 7)} created!`));

    // Clear the index

};

export default commit;