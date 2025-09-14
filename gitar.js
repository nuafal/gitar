import { Commands } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import init from "./commands/init.js";
import add from "./commands/add.js";
import commit from "./commands/commit.js";

const program = new Commands();

console.log(chalk.cyan(figlet.textSync("GITAR")));

program
    .version("1.0.0")
    .description("A modern Git implementation in JavaScript")
    .name("gitar")
    .usage("<command> [options]");

program
    .command("init", "Initialize a new glit repository")
    .action(init);
program
    .command("add", "Add files to the staging area")
    .argument("<files...>", "Files to add")
    .action(add);

program
    .command("commit", "Record changes to the repository")
    .action(commit);

program.parse();