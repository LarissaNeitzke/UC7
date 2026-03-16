const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceTransform() {

    const challenge = {
        sentence: "She is working",
        correct: "She isn't working",
        explanation: 'We contract "is not" to "isn’t" in negative sentences.'
    };

    console.log("\nTransform the sentence - Make it NEGATIVE:");
    console.log(challenge.sentence);

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
        sentence: "They are coding",
        correct: "Are they coding?",
        explanation: 'To form questions with "to be", we invert the subject and the verb.'
    };

    console.log("\nTransform the sentence - Make it a QUESTION:");
    console.log(challenge2.sentence);

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
        sentence: "I am studying JavaScript",
        correct: "I'm studying JavaScript",
        explanation: 'We contract "I am" to "I’m".'
    };

    console.log("\nTransform the sentence - Make it CONTRACTION:");
    console.log(challenge3.sentence);

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
        sentence: "He does not like bugs",
        correct: "He doesn't like bugs",
        explanation: 'We contract "does not" to "doesn’t".'
    };

    console.log("\nTransform the sentence - Make it CONTRACTION:");
    console.log(challenge4.sentence);

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
        sentence: "She likes coffee",
        correct: "Does she like coffee?",
        explanation: 'We use "does" to form questions in the simple present with third person.'
    };

    console.log("\nTransform the sentence - Make it a QUESTION:");
    console.log(challenge5.sentence);

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
        sentence: "We are not ready",
        correct: "We aren't ready",
        explanation: 'We contract "are not" to "aren’t".'
    };

    console.log("\nTransform the sentence - Make it CONTRACTION:");
    console.log(challenge6.sentence);

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

module.exports = sentenceTransform;