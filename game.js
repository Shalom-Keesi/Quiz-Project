const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question:
        "What is 1+1?",
        choice1: "2",
        choice2: "11",
        choice3: "22",
        choice4: "111",
        answer: 1
    },
    {
        question:
        "What is 2+2?",
        choice1: "4",
        choice2: "11",
        choice3: "22",
        choice4: "111",
        answer: 1

    },
    {
        question:
        "What is 3+3?",
        choice1: "6",
        choice2: "11",
        choice3: "22",
        choice4: "111",
        answer: 1
    },
    {

        question:
        "What is 4+4?",
        choice1: "8",
        choice2: "11",
        choice3: "22",
        choice4: "111",
        answer: 1
    },
    {
        question:
        "What is 5+5?",
        choice1: "2",
        choice2: "10",
        choice3: "22",
        choice4: "111",
        answer: 2
    }
];

// constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = ( ) => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; 
    // console.log(availableQuestions);
    getNewQuestion();
};

// arrow syntax

getNewQuestion = () => {
    if (availableQuestions.length ===0|| questionCounter>=MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign("/end.html");

    }
        
    questionCounter++;
    const questionIndex= Math.floor(Math.random()* availableQuestions.length);
    currentQuestion =availableQuestions[questionIndex];
    question.innerText = currentQuestion.question


    choices.forEach( choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
    


};

choices.forEach(choice => {
    choice.addEventListener("click", event => {
        if(!acceptingAnswers)return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = 'incorrect';
        if (selectedAnswer==currentQuestion.answer){
            classToApply = 'correct';
        }
        // const classToApply= 
        // selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply);
        // console.log(selectedAnswer==currentQuestion.answer);
        getNewQuestion();
        },1000);
        
        

    });
});


startGame();