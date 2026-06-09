const readline = require("readline-sync");

const levels = {
    1: {
        name: "Easy",
        attempts: 8,
        words: [
        ],
    },
    2: {
        name: "Medium",
        attempts: 6,
        words: [
        ],
    },
    3: {
        name: "Hard",
        attempts: 5,
        words: [
        ],
    }
}

const hangmanStages = [
    "Head",
    "Body",
    "Left arm",
    "Right arm",
    "Left leg",
    "Right leg",
    "Left hand",
    "Right hand"
]

console.log("=== HANGMAN GAME ===");
console.log("Choose difficulty");
console.log("1 - Easy");
console.log("2- Medium");
console.log("3 - Hard");

let levelChoice = readline.question("Enter (1/2/3): ");
let level = levels[levelChoice] || levels[1];

let guessedLetters = [];
let attempts = level.attempts;

function displayWord(){
return chosenWord
.split("")
.map((letter) => {
    if (letter === " ") return " ";
    return guessedLetters.includes(letter) ? letter : "_";
})
.join(" ");
}

function isWordComplete() {
    return chosenWord
    .split("")
    .every((letter) => letter === " " || guessedLetters.includes (letter));
}

function drawHangman() {
    const stageIndex = hangmanStages.length - 1 - attempts;
    return hangmanStages[Math.max(0, stageIndex)];
}

while (attempts > 0){
    console.clear ();
    console.log (`=== ${level.name.toUpperCase()} MODE ===)`);
    console.log ("\nWord:", displayWord());
    console.log ("Attempts left:", attempts);
    console.log ("Guessed:", guessedLetters.join(", ") || "none");

    let guess = readline
    .question("\nGuess a letter or the full phrase: ")
    .toLowerCase();

if (guess.length > 1){
    if (guess === chosenWord){
        console.log("\nYou guessed the phrase!");
        break;
    } else {
        console.log("Wrong phrase!");
        attempts--;
        readline.question("Press ENTER...");
        continue;
    }
}    

if (!guess.match(/^[a-z']$/)) {
    console.log("Type only ONE letter (a-z).");
    readline.question("Press ENTER...");
    continue;
}

guessedLetters.push(guess);

}