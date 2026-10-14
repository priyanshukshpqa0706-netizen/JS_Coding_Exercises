//WAP to Take Input from Users


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (userName) => {
    console.log("Hey! " + userName);
    rl.close();
});


// For browser or take input from console
// let userName = prompt("Please enter your name");
// console.log("Hey!", userName);