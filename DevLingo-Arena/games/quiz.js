const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz() {

    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2",
            explanation: 'We use "is" with third person singular (she/he/it).'
        },
        {
            question: "They ____ students.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1",
            explanation: 'We use "are" with plural subjects.'
        },
        {
            question: "She ____ every day.",
            options: ["1) work", "2) working", "3) works"],
            answer: "3",
            explanation: 'In the simple present we add "s" for third person singular.'
        },
        {
            question: "I ____ to work yesterday.",
            options: ["1) go", "2) went", "3) goes"],
            answer: "2",
            explanation: '"Went" is the past form of the verb "go".'
        },
        {
            question: "I ____ like bugs.",
            options: ["1) don’t", "2) doesn’t", "3) didn’t"],
            answer: "1",
            explanation: 'We use "don’t" for negative sentences with I/you/we/they.'
        },
        {
            question: "She ____ understand.",
            options: ["1) don’t", "2) doesn’t", "3) didn’t"],
            answer: "2",
            explanation: 'We use "doesn’t" because it is third person singular.'
        },
        {
            question: "____ you code?",
            options: ["1) Do", "2) Does", "3) Did"],
            answer: "1",
            explanation: 'We use "do" for present questions with I/you/we/they.'
        },
        {
            question: "____ she work here?",
            options: ["1) Do", "2) Does", "3) Did"],
            answer: "2",
            explanation: 'We use "does" because it is third person singular.'
        },
        {
            question: "____ you finish the task yesterday?",
            options: ["1) Do", "2) Does", "3) Did"],
            answer: "3",
            explanation: 'We use "did" to form questions in the past.'
        },
        {
            question: "Plural of 'class':",
            options: ["1) class", "2) classes", "3) classs"],
            answer: "2",
            explanation: 'Words ending in "s" usually form plural with "es".'
        }
    ];

    questions.forEach(q => {

        console.log("\n" + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = readline.question("Answer: ");

        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addPoints(10);
        } else {
            console.log("Wrong!");
            console.log("Explanation:", q.explanation);
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = quiz;