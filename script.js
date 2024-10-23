const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which of the following animals can sleep for up to three years?",
        answers: [
            { text: "Tortoise", correct: false},
            { text: "Koala", correct: false},
            { text: "Snail", correct: true},
            { text: "Sloth", correct: false}
        ]

    },
    {
        question: "What is the smallest country in the world by land area",
        answers: [
            { text: "Monaco", correct: false},
            { text: "Vatican City", correct: true},
            { text: "Liechtenstein", correct: false},
            { text: "San Marino", correct: false}
        ]

    },
    {
        question: "Which element is the most abundanat in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false},
            { text: "Hydrogen", correct: false},
            { text: "Carbon Dioxide", correct: false},
            { text: "Nitrogen", correct: true}
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuesiton();
}

function showQuesiton(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    
    }
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();