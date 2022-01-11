const quizDB = [
    {
        question: "Q1: What is the full form of Html?",
        a: "HyperText Markup Language.",
        b: "HighText Markup Language.",
        c: "HyperText Markdown Language.",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q3: How to create an ordered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<href>",
        d: "<b>",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of HTTP?",
        a: "hypertext Transfer Product",
        b: "Hypertext test Protocol",
        c: "Hey Transfer Protocol",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q5:Java is an ------language",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above.",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        
    });
     return answer;
};

const deselectAll = () =>
{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() =>
{
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;
    deselectAll();
    
    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        if(score == 5 || score == 4)
        {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👍</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
     else
    {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👎</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
}
});