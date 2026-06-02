const chapters = [
    {
        image: "images/castle.jpg",

        text: 'Emma _____ a new student when she _____ the magic castle.',

        options1: ["was", "became"],
        options2: ["entered", "discovered"],

        feedbacks: [
            "Interesting beginning for the adventure!",
            "Emma seems very curious!",
            "The magic castle is full of surprises!",
            "Great choice for the story!"
        ]
    },

    {
        image: "images/forest.jpg",

        text: 'The students _____ through the forest when they _____ a strange creature.',

        options1: ["were walking", "ran"],
        options2: ["found", "heard"],

        feedbacks: [
            "The forest is getting mysterious!",
            "That creature may be dangerous...",
            "Interesting continuation of the story!",
            "Your adventure is becoming exciting!"
        ]
    },

    {
        image: "images/potion.jpg",

        text: 'Emma _____ a magic potion and it _____ bright blue.',

        options1: ["created", "mixed"],
        options2: ["became", "turned"],

        feedbacks: [
            "Magic is everywhere now!",
            "That potion looks powerful!",
            "Emma is learning fast!",
            "Very creative choice!"
        ]
    },

    {
        image: "images/dragon.jpg",

        text: 'The dragon _____ quietly when Emma _____ the ancient door.',

        options1: ["was sleeping", "rested"],
        options2: ["opened", "touched"],

        feedbacks: [
            "The dragon scene is intense!",
            "That was a brave decision!",
            "The castle hides many secrets!",
            "Amazing continuation!"
        ]
    },

    {
        image: "images/ending.jpg",

        text: 'In the end, Emma _____ a powerful wizard and _____ many loyal friends.',

        options1: ["became", "was"],
        options2: ["made", "found"],

        feedbacks: [
            "What a beautiful ending!",
            "Emma completed her journey!",
            "The adventure had a happy ending!",
            "Fantastic story choices!"
        ]
    }
];

let currentChapter = 0;
let xp = 0;

const completeStory = [];

let selectedWords = [];

const storyText = document.getElementById("story-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const xpText = document.getElementById("xp");
const chapterText = document.getElementById("chapter");
const progressBar = document.getElementById("progress-bar");
const storyImage = document.getElementById("story-image");

function loadChapter() {

    const chapter = chapters[currentChapter];

    storyText.innerHTML = chapter.text;

    optionsContainer.innerHTML = "";

    feedback.innerHTML = "";

    storyImage.src = chapter.image;

    selectedWords = [];

    createButtons(chapter.options1);
}

function createButtons(optionsArray) {

    optionsContainer.innerHTML = "";

    optionsArray.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option-button");

        button.onclick = () => selectOption(option);

        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {

    selectedWords.push(option);

    xp += 10;

    xpText.innerText = xp;

    const chapter = chapters[currentChapter];

    const randomFeedback =
        chapter.feedbacks[
            Math.floor(Math.random() * chapter.feedbacks.length)
        ];

    feedback.innerHTML = randomFeedback;

    if(selectedWords.length === 1) {

        createButtons(chapter.options2);

    } else {

        let completedText = chapter.text;

        completedText = completedText.replace("_____", selectedWords[0]);
        completedText = completedText.replace("_____", selectedWords[1]);

        completeStory.push(completedText);

        currentChapter++;

        chapterText.innerText = currentChapter + 1;

        progressBar.style.width =
            (currentChapter / chapters.length) * 100 + "%";

        if(currentChapter < chapters.length) {

            setTimeout(() => {
                loadChapter();
            }, 1500);

        } else {

            showFinalScreen();
        }
    }
}

function showFinalScreen() {

    const finalStory = completeStory.join(" ");

    document.querySelector(".game-container").innerHTML = `

        <h1>The End!</h1>

        <h2>Your XP: ${xp}</h2>

        <div class="story-box">
            <h3>Your Complete Story:</h3>

            <p>${finalStory}</p>
        </div>

        <button onclick="location.reload()" class="option-button">
            Play Again
        </button>
    `;
}

loadChapter();