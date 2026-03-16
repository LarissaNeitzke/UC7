const readline = require('readline-sync');
const gameState = require('../gameState');

function detectiveStory() {

    console.log("\nYou are a detective solving a mystery.");

    console.log("\nChoose the correct word:");
    console.log("The suspect ____ nervous.");

    console.log("1) looks");
    console.log("2) look");
    console.log("3) looking");

    let answer = readline.question("Option: ");

    if(answer === "1") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: In the simple present we add "s" for third person singular (he/she/it).');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("She ____ every day.");

    console.log("1) work");
    console.log("2) works");
    console.log("3) working");

    answer = readline.question("Option: ");

    if(answer === "2") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: In the simple present we add "s" to verbs with she/he/it.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("I ____ to work yesterday.");

    console.log("1) go");
    console.log("2) goes");
    console.log("3) went");

    answer = readline.question("Option: ");

    if(answer === "3") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: "Went" is the past form of the verb "go".');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("I ____ like bugs.");

    console.log("1) don't");
    console.log("2) doesn't");
    console.log("3) didn't");

    answer = readline.question("Option: ");

    if(answer === "1") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: We use "don’t" with I/you/we/they in negative sentences in the present.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("She ____ understand.");

    console.log("1) doesn't");
    console.log("2) don't");
    console.log("3) didn't");

    answer = readline.question("Option: ");

    if(answer === "1") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: We use "doesn’t" because it is third person singular.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("I ____ push the code yesterday.");

    console.log("1) doesn't");
    console.log("2) don't");
    console.log("3) didn't");

    answer = readline.question("Option: ");

    if(answer === "3") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: We use "didn’t" (did not) for negative sentences in the past.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("Contraction of 'I am'.");

    console.log("1) Im");
    console.log("2) I'm");
    console.log("3) Iam");

    answer = readline.question("Option: ");

    if(answer === "2") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: "I’m" is the contraction of "I am".');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("____ you code?");

    console.log("1) Does");
    console.log("2) Do");
    console.log("3) Did");

    answer = readline.question("Option: ");

    if(answer === "2") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: We use "do" for questions with I/you/we/they in the present.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("____ she work here?");

    console.log("1) Do");
    console.log("2) Does");
    console.log("3) Did");

    answer = readline.question("Option: ");

    if(answer === "2") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: We use "does" because it is third person singular.');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("Plural of 'class'.");

    console.log("1) class");
    console.log("2) classs");
    console.log("3) classes");

    answer = readline.question("Option: ");

    if(answer === "3") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: Words ending in "s" usually form plural with "es".');
        gameState.loseLife();
    }

    console.log("\nChoose the correct word:");
    console.log("There ____ many variables.");

    console.log("1) is");
    console.log("2) are");
    console.log("3) be");

    answer = readline.question("Option: ");

    if(answer === "2") {
        console.log("Clue discovered!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong clue!");
        console.log('Explanation: "There are" is used with plural nouns.');
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = detectiveStory;