const readlineSync = require('readline-sync');

// Inform the user about the current development state
console.log("Welcome!".rainbow);
console.log("Please note: This site is currently under development.".bold.red);
console.log("Your input will help us improve the final version.".bold.green);

// Main prompt function
function getUserInput() {
    console.log("\nLet's gather some initial feedback:".bold.blue);
    const name = readlineSync.question('What is your name? '.cyan);
    const feedback = readlineSync.question('What improvements would you like to see on the site? '.magenta);

    console.log("\nThank you for your valuable input!".bold.yellow);
    console.log(`We appreciate your feedback, ${name.bold.red}. Your suggestion: "${feedback.bold.red}" will help us enhance our site.\n`.bold.underline);
}

// Run the prompt
getUserInput();
