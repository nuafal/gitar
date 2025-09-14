# Gitar 🎸

>I am building as I am learning on how to build A simple Git clone built with Node.js to understand how version control works under the hood.

Refer to the links as a guide:-

[ Built Git in JavaScript… and You Can Too! (Step-by-Step Tutorial)](https://dev.to/alishirani/i-built-git-in-javascript-and-you-can-too-step-by-step-tutorial-28k5)

[ Rebuilt Git in JavaScript (Node.js) ](https://youtu.be/sUR4PtOd1iE)

This project is a command-line tool that mimics some of the core functionalities of Git, such as initializing a repository, adding files to a staging area, and committing them.

---

## Features ✨

* **Initialize Repository:** Create a new .gitar repository with gitar init.
* **Stage Files:** Add one or more files to the staging area with gitar add <files...>.
* **Commit Changes:** Currently under development.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js and npm installed on your machine.
* [Node.js](https://nodejs.org/)

### Installation

1.  Clone this repository:
    `
    git clone [https://github.com/nuafal/gitar.git](https://github.com/nuafal/gitar.git)
    `
2.  Install NPM packages:
    `
    npm install
    `
3.  Link the package to make the command available globally:
    `
    npm link
    `

---

## Usage 🚀

Once installed, you can use gitar from any directory.

* **Initialize a repository:**
    `
    gitar init
    `
* **Add files to the staging area:**
    `
    gitar add file1.txt file2.js
    `

---

## Project Structure 📁

├── commands/

│   ├── add.js        # Logic for the 'add' command

│   ├── commit.js     # Logic for the 'commit' command

│   └── init.js       # Logic for the 'init' command

├── .gitignore

├── gitar.js          # Main CLI entry point

├── package.json

└── README.md

## More links if you want to build Git using other programming language:

[Build your own Git](https://github.com/codecrafters-io/build-your-own-x/blob/master/README.md#build-your-own-git)






