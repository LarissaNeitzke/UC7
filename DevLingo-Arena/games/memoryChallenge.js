const readline = require('readline-sync');
const gameState = require('../gameState');

function memoryChallenge() {

    const words = ["works", "went", "don't", "didn't"];

    console.log("\nMemorize these words:");
    console.log(words.join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();

    let answer = readline.question("Type the words separated by comma: ");

    if(answer === words.join(", ")) {
        console.log("Perfect memory!");
        gameState.addPoints(20);
    } else {
        console.log("Not quite!");
        console.log('Explanation: "works" is used in the simple present for third person singular.');
        console.log('Explanation: "went" is the past form of "go".');
        console.log('Explanation: "don\'t" is the contraction of "do not".');
        console.log('Explanation: "didn\'t" is the contraction of "did not".');
        gameState.loseLife();
    }

    const words2 = ["does", "did", "i'm", "she's"];

    console.log("\nMemorize these words:");
    console.log(words2.join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();

    answer = readline.question("Type the words separated by comma: ");

    if(answer === words2.join(", ")) {
        console.log("Perfect memory!");
        gameState.addPoints(20);
    } else {
        console.log("Not quite!");
        console.log('Explanation: "does" is used in present questions with third person singular.');
        console.log('Explanation: "did" is used to form questions in the past.');
        console.log('Explanation: "I\'m" is the contraction of "I am".');
        console.log('Explanation: "She\'s" is the contraction of "She is".');
        gameState.loseLife();
    }

    const words3 = ["variables", "classes", "are", "is"];

    console.log("\nMemorize these words:");
    console.log(words3.join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();

    answer = readline.question("Type the words separated by comma: ");

    if(answer === words3.join(", ")) {
        console.log("Perfect memory!");
        gameState.addPoints(20);
    } else {
        console.log("Not quite!");
        console.log('Explanation: "variables" is the plural form of "variable".');
        console.log('Explanation: "classes" is the plural form of "class".');
        console.log('Explanation: "are" is used with plural nouns.');
        console.log('Explanation: "is" is used with singular nouns.');
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = memoryChallenge;