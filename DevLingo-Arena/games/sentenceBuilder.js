const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceBuilder() {

    const challenge = {
        words: ["developer", "is", "He", "a"],
        correct: "He is a developer",
        explanation: 'We use "is" with third person singular (he/she/it).'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge.words.join(" | "));

    let answer = readline.question("Sentence: ");

    if(answer === challenge.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge.correct);
        console.log("Explanation:", challenge.explanation);
        gameState.loseLife();
    }

    const challenge2 = {
        words: ["every", "works", "day", "She"],
        correct: "She works every day",
        explanation: 'In the simple present we add "s" for third person singular.'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge2.words.join(" | "));

    answer = readline.question("Sentence: ");

    if(answer === challenge2.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge2.correct);
        console.log("Explanation:", challenge2.explanation);
        gameState.loseLife();
    }

    const challenge3 = {
        words: ["went", "yesterday", "I", "work", "to"],
        correct: "I went to work yesterday",
        explanation: '"Went" is the past form of the verb "go".'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge3.words.join(" | "));

    answer = readline.question("Sentence: ");

    if(answer === challenge3.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge3.correct);
        console.log("Explanation:", challenge3.explanation);
        gameState.loseLife();
    }

    const challenge4 = {
        words: ["like", "bugs", "don't", "I"],
        correct: "I don't like bugs",
        explanation: 'We use "don’t" to make negative sentences with I/you/we/they.'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge4.words.join(" | "));

    answer = readline.question("Sentence: ");

    if(answer === challenge4.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge4.correct);
        console.log("Explanation:", challenge4.explanation);
        gameState.loseLife();
    }

    const challenge5 = {
        words: ["finish", "didn't", "They"],
        correct: "They didn't finish",
        explanation: 'We use "didn’t" (did not) to form negative sentences in the past.'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge5.words.join(" | "));

    answer = readline.question("Sentence: ");

    if(answer === challenge5.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge5.correct);
        console.log("Explanation:", challenge5.explanation);
        gameState.loseLife();
    }

    const challenge6 = {
        words: ["many", "are", "There", "variables"],
        correct: "There are many variables",
        explanation: '"There are" is used with plural nouns.'
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge6.words.join(" | "));

    answer = readline.question("Sentence: ");

    if(answer === challenge6.correct) {
        console.log("Correct!");
        gameState.addPoints(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge6.correct);
        console.log("Explanation:", challenge6.explanation);
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = sentenceBuilder;