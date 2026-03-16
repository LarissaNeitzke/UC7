const readline = require('readline-sync');
const gameState = require('../gameState');

function battleRPG() {

    let enemyHP = 30;

    console.log("\nA Grammar Monster appears!");

    while(enemyHP > 0) {

        console.log("\nEnemy HP:", enemyHP);
        console.log("Answer correctly to attack.");

        let answer = readline.question("Past of 'go': ");

        if(answer.toLowerCase() === "went") {
            console.log("Hit!");
            enemyHP -= 10;
            gameState.addPoints(10);
        } else {
            console.log("Miss! You got hit.");
            console.log("Correct answer: went");
            console.log('Explanation: "Went" is the past form of the verb "go". We use past forms for actions in the past.');
            gameState.loseLife();
            break;
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete: She ____ every day. ");

            if(answer.toLowerCase() === "works") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: works");
                console.log('Explanation: In the simple present we add "s" to verbs in the third person singular (she/he/it).');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete: I ____ like bugs. ");

            if(answer.toLowerCase() === "don't") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: don't");
                console.log('Explanation: We use "don’t" (do not) to make negative sentences in the present with I/you/we/they.');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete: She ____ understand. ");

            if(answer.toLowerCase() === "doesn't") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: doesn't");
                console.log('Explanation: We use "doesn’t" because it is third person singular (she/he/it).');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete: I ____ push the code yesterday. ");

            if(answer.toLowerCase() === "didn't") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: didn't");
                console.log('Explanation: We use "didn’t" (did not) to make negative sentences in the past.');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Contraction of 'I am': ");

            if(answer.toLowerCase() === "i'm") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: I'm");
                console.log('Explanation: "I’m" is the contraction of "I am".');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete the question: ____ you code? ");

            if(answer.toLowerCase() === "do") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: do");
                console.log('Explanation: We use "do" to make questions in the present with I/you/we/they.');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete the question: ____ she work here? ");

            if(answer.toLowerCase() === "does") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: does");
                console.log('Explanation: We use "does" because it is third person singular.');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Plural of 'class': ");

            if(answer.toLowerCase() === "classes") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: classes");
                console.log('Explanation: Words ending in "s" form plural with "es".');
                gameState.loseLife();
                break;
            }
        }

        if(enemyHP > 0) {

            console.log("\nEnemy HP:", enemyHP);
            console.log("Answer correctly to attack.");

            answer = readline.question("Complete: There ____ many variables. ");

            if(answer.toLowerCase() === "are") {
                console.log("Hit!");
                enemyHP -= 10;
                gameState.addPoints(10);
            } else {
                console.log("Miss! You got hit.");
                console.log("Correct answer: are");
                console.log('Explanation: "There are" is used with plural nouns.');
                gameState.loseLife();
                break;
            }
        }

    }

    if(enemyHP <= 0) {
        console.log("Monster defeated!");
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = battleRPG;