const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence() {

    const sentences = [
        { text: "I ____ a developer.", answer: "am" },
        { text: "She ____ coding now.", answer: "is" },
        { text: "She ____ every day.", answer: "works", explanation: 'In the simple present, verbs usually receive "s" in the third person singular.' },
        { text: "They ____ soccer.", answer: "play", explanation: 'In the simple present, plural subjects use the base form of the verb.' },
        { text: "I ____ to work yesterday.", answer: "went", explanation: '"Went" is the past form of the verb "go". We use past forms for actions in the past.' },
        { text: "She ____ the bug.", answer: "fixed", explanation: 'Regular verbs in the past usually end with "ed".' },
        { text: "I ____ like bugs.", answer: "don't", explanation: 'We use "don’t" (do not) to make negative sentences in the present with I/you/we/they.' },
        { text: "She ____ understand.", answer: "doesn't", explanation: 'We use "doesn’t" (does not) with third person singular (she/he/it).' },
        { text: "I ____ push the code.", answer: "didn't", explanation: 'We use "didn’t" (did not) to make negative sentences in the past.' },
        { text: "They ____ finish.", answer: "didn't", explanation: 'Past negative sentences use "didn’t" + base verb.' },
        { text: "She ____ a developer.", answer: "is", explanation: '"She’s" is the contraction of "She is".' },
        { text: "____ you code?", answer: "do", explanation: 'We use "do" to make questions in the present with I/you/we/they.' },
        { text: "____ she work here?", answer: "does", explanation: 'We use "does" because it is third person singular.' },
        { text: "____ you finish the task?", answer: "did", explanation: 'We use "did" to form questions in the past.' },
        { text: "Singular: Variable / Plural: ____", answer: "variables", explanation: 'To form plural nouns, we usually add "s".' },
        { text: "Singular: Class / Plural: ____", answer: "classes", explanation: 'Nouns ending in "s" usually form plural with "es".' },
        { text: "There ____ many variables.", answer: "are", explanation: '"There are" is used with plural nouns.' },
        { text: "There ____ one bug.", answer: "is", explanation: '"There is" is used with singular nouns.' }
    ];

    sentences.forEach(s => {

        console.log("\nComplete:");
        console.log(s.text);

        let answer = readline.question("Word: ").toLowerCase();

        if(answer === s.answer) {
            console.log("Correct!");
            gameState.addPoints(10);
        } else {
            console.log("Wrong! Correct answer:", s.answer);
            console.log("Explanation:", s.explanation);
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = completeSentence;