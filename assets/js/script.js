const question = document.getElementById('question');
const choices = document.getElementsByClassName('choices-text');
const scoreNum = document.getElementById('score-num');

let currentQuestion = {};
let score = 0;

/* Quiz questions */
let questions = [
    {
        question: 'What country is the most populated? (from 2024)',
        choice1: 'China',
        choice2: 'India',
        choice3: 'United States of America',
        choice4: 'Pakistan',
        asnwer: 2,
    },
    {
        question: 'What animal does Bhutan have on their flag?',
        choice1: 'Dragon',
        choice2: 'Horse',
        choice3: 'Snake',
        choice4: 'Kraken',
        asnwer: 1,
    },
    {
        question: 'What is the biggest country by area?',
        choice1: 'Canada',
        choice2: 'Russia',
        choice3: 'United States of America',
        choice4: 'China',
        asnwer: 2,
    },
    {
        question: 'What country has never fought in a war?',
        choice1: 'Iceland',
        choice2: 'Sweden',
        choice3: 'San Marino',
        choice4: 'Cyprus',
        asnwer: 3,
    },
    {
        question: 'What country has the most colours on their flag?',
        choice1: 'South Africa',
        choice2: 'Central African Republic',
        choice3: 'Seychelles',
        choice4: 'Belize',
        asnwer: 4,
    },
    {
        question: "What is the world's newest country? (recognised independence from inital country)",
        choice1: 'Montenegro',
        choice2: 'Serbia',
        choice3: 'South Sudan',
        choice4: 'Kosovo',
        asnwer: 3,
    },
    {
        question: 'What country has the highest female to male ratio? (from 2024)',
        choice1: 'Armenia',
        choice2: 'Ukraine',
        choice3: 'Belarus',
        choice4: 'Latvia',
        asnwer: 1,
    },
    {
        question: 'What country has the most islands being over 250,000?',
        choice1: 'Sweden',
        choice2: 'Philippines',
        choice3: 'Indonesia',
        choice4: 'Norway',
        asnwer: 1,
    },
    {
        question: 'What country has the longest coastline?',
        choice1: 'Croatia',
        choice2: 'Canada',
        choice3: 'Singapore',
        choice4: 'Japan',
        asnwer: 2,
    },
    {
        question: 'What country is the most visited in the world? (from 2024)',
        choice1: 'Mexico',
        choice2: 'Turkey',
        choice3: 'Spain',
        choice4: 'France',
        asnwer: 4,
    }
]

function startQuiz() {
    score = 0;
    
}