let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Will Smith",
        "correct_answer": 3,
    },
    {
        "question": "Was bedeutet HTML?",
        "answer_1": "Hello Text Markup Language",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hyper Test Markup Language",
        "answer_4": "Hyper Text Makeup Language",
        "correct_answer": 2,
    },
    {
        "question": "Womit beginnt ein HTML Dokument?",
        "answer_1": "!DOCTYPE html",
        "answer_2": "start html",
        "answer_3": "HTML lets GO!",
        "answer_4": "html",
        "correct_answer": 1,
    },
    {
        "question": "Was befindet sich im Tag <img>?",
        "answer_1": "Video",
        "answer_2": "Sound",
        "answer_3": "Text",
        "answer_4": "Bild",
        "correct_answer": 4,
    },
    {
        "question": "Was macht oder ist das CSS?",
        "answer_1": "Server",
        "answer_2": "Texte",
        "answer_3": "Styling",
        "answer_4": "Zahlungen",
        "correct_answer": 3,
    },
    {
        "question": "Wofür benötigt man das <script>-Tag?",
        "answer_1": "JavaScript",
        "answer_2": "CSS",
        "answer_3": "HTML",
        "answer_4": "Bootstrap",
        "correct_answer": 1,
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "Creating Styling Sheets",
        "answer_2": "Computing Sty Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Color Sheme Sheets",
        "correct_answer": 3,
    },
    {
        "question": "Wie definiert man eine JavaScript Funktion?",
        "answer_1": "myFunction()",
        "answer_2": "function myFunction()",
        "answer_3": "function=myFunction()",
        "answer_4": "function:myFunction()",
        "correct_answer": 2,
    },
    {
        "question": "Wie schreibt man eine IF-Abfrage in JavaScript?",
        "answer_1": "if(index : 0)",
        "answer_2": "if(index 0)",
        "answer_3": "if{index = 0)}",
        "answer_4": "if(index == 0)",
        "correct_answer": 4,
    },
    {
        "question": "Wie schreibt man eine FOR-Schleife in JavaScript?",
        "answer_1": "for(i = 0; i < array.length; i++)",
        "answer_2": "for: i < array.length; i++",
        "answer_3": "for(i : 0; i < array.length; i+)",
        "answer_4": "for[i = 0; i++]",
        "correct_answer": 1,
    },
];

let currentQuestion = 0;
let correctQuestion = 0;

function init(){

    if(currentQuestion >= questions.length){
        document.getElementById('end-screen-container').style = '';
        document.getElementById('ofAllEndScreen').innerHTML = questions.length;
        document.getElementById('play-area').style = 'display: none';
    }else{
        let question = questions[currentQuestion];
        document.getElementById('ofAll').innerHTML = questions.length;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    }

function answer(selection){
    let question = questions[currentQuestion];
    let idOfCorrectAnswer = `answer_${question['correct_answer']}`;

    selectionNumber = selection.slice(-1);

    if(selectionNumber == questions[currentQuestion]['correct_answer']){
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById('amountCorrectQuestions').innerHTML = correctQuestion++ + 1;
    }else{
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfCorrectAnswer).classList.add('bg-success');
    }

    document.getElementById('next_question_btn').disabled = false;
}

function nextQuestion(){
    currentQuestion++; //wechselt zur nächsten Frage z.B. von 0 auf 1
    document.getElementById('next_question_btn').disabled = true;
    document.getElementById('currentNumber').innerHTML = currentQuestion + 1;
    resetAnswerButtons();
    init();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-danger');
}
