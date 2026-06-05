const quizquestions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {
                text: "Hyper Text Markup Language", correct: true,
            },
            {
                text: "Hyperlinks and Text Markup Language", correct: false,
            },
            {
                text: "Home Tool Markup Language", correct: false,
            },
            {
                text: "Hyper Tool Multi Language", correct: false,
            }
        ]
    },
    {
        question: "Which tag is used to create a hyperlink?",
        answers: [
            {
                text: "link", correct: false,
            },
            {
                text: "a", correct: true,
            },
            {
                text: "href", correct: false,
            },
            {
                text: "hyper", correct: false,
            }
        ]
    },
    {
        question: "How do you add a comment in HTML?",
        answers: [
            {
                text: "// This is a comment", correct: false,
            },
            {
                text: "!-- This is a comment --", correct: true,
            },
            {
                text: "/* This is a comment */", correct: false,
            },
            {
                text: "** This is a comment **", correct: false,
            }
        ]
    },
    {
        question: "Which attribute is used to open a link in a new tab?",
        answers: [
            {
                text: "target=_blank", correct: true,
            },
            {
                text: "href=_new", correct: false,
            },
            {
                text: "link=_tab", correct: false,
            },
            {
                text: "open=new", correct: false,
            }
        ]
    },
    {
        question: "What is the correct HTML element for inserting an image?",
        answers: [
            {
                text: "image", correct: false,
            },
            {
                text: "src", correct: false,
            },
            {
                text: "img", correct: true,
            },
            {
                text: "pic", correct: false,
            }
        ]
    }
]
const questionElement = document.getElementById("que");
const Answers = document.getElementById("Answers");
const next = document.getElementById("next");

let questionindex = 0;
let score = 0;

function startquiz() {
    questionindex = 0;
    score = 0;
    next.innerHTML = "next";
    startQuestion();
}
function startQuestion() {
    resetState()
    let currentQuestion = quizquestions[questionindex];
    let questionNo = questionindex +1;
    questionElement.innerHTML = questionNo + " " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        Answers.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(Answers.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
        
    });
    next.style.display = "block";
}





next.addEventListener("click", () => {
    questionindex++;
    if (questionindex < quizquestions.length) {
        startQuestion();
    } else {
        showScore();
    }
});

function resetState() {
    next.style.display = "none";
    while (Answers.firstChild) {
        Answers.removeChild(Answers.firstChild);
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${quizquestions.length}!`;
    next.style.display = "none";
    next.onclick = startquiz;
}

startquiz();