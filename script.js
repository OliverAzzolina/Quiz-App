let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer-1": "Robbie Williams",
        "answer-2": "Lady Gaga",
        "answer-3": "Tim Berners-Lee",
        "answer-4": "Will Smith",
        "correct_answer": 3,
    },
    {
        "question": "Was bedeutet HTML?",
        "answer-1": "Hello Text Markup Language",
        "answer-2": "Hyper Text Markup Language",
        "answer-3": "Hyper Test Markup Language",
        "answer-4": "Hyper Text Makeup Language",
        "correct_answer": 2,
    },
    {
        "question": "Womit beginnt ein HTML Dokument?",
        "answer-1": "!DOCTYPE html",
        "answer-2": "start html",
        "answer-3": "HTML lets GO!",
        "answer-4": "html",
        "correct_answer": 1,
    },
    {
        "question": "Was befindet sich im img-Tag?",
        "answer-1": "Video",
        "answer-2": "Sound",
        "answer-3": "Text",
        "answer-4": "Bild",
        "correct_answer": 4,
    },
    {
        "question": "Was macht oder ist das CSS?",
        "answer-1": "Server",
        "answer-2": "Texte",
        "answer-3": "Styling",
        "answer-4": "Zahlungen",
        "correct_answer": 3,
    },
    {
        "question": "Wofür benötigt man ein script-Tag?",
        "answer-1": "Einbinden von JavaScript",
        "answer-2": "Einbinden von CSS",
        "answer-3": "Einbinden von HTML",
        "answer-4": "Einbinden von Bootstrap",
        "correct_answer": 1,
    },
    {
        "question": "Wofür steht CSS?",
        "answer-1": "Creating Styling Sheets",
        "answer-2": "Computing Sty Sheets",
        "answer-3": "Cascading Style Sheets",
        "answer-4": "Color Sheme Sheets",
        "correct_answer": 3,
    },
    {
        "question": "Wie definiert man eine JavaScript-Funktion?",
        "answer-1": "myFunction()",
        "answer-2": "function myFunction()",
        "answer-3": "function=myFunction()",
        "answer-4": "function:myFunction()",
        "correct_answer": 2,
    },
    {
        "question": "Wie schreibt man eine IF-Abfrage in JavaScript?",
        "answer-1": "if(index : 0)",
        "answer-2": "if(index 0)",
        "answer-3": "if{index = 0)}",
        "answer-4": "if(index == 0)",
        "correct_answer": 4,
    },
    {
        "question": "Wie schreibt man eine FOR-Schleife in JavaScript?",
        "answer-1": "for(i = 0; i < array.length; i++)",
        "answer-2": "for: i < array.length; i++",
        "answer-3": "for(i : 0; i < array.length; i+)",
        "answer-4": "for[i = 0; i++]",
        "correct_answer": 1,
    },
];

let currentQuestion = 0;
let correctQuestion = 0;
let SOUND_SUCCESS = new Audio('./audio/success.mp3');
let SOUND_FAIL = new Audio('./audio/fail.mp3');
let SOUND_WIN = new Audio('./audio/victory.mp3');
let SOUND_LOOSE = new Audio('./audio/loose.mp3');

function init(){
    document.getElementById('of-all-end-screen').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if(gamesIsOver()){
        showEndscreen();
    }else{
        updateProgressBar();
        goToNextQuestion();
    }
}

function gamesIsOver(){
    return currentQuestion >= questions.length;
}

function showEndscreen(){
    document.getElementById('end-screen-container').style = '';
    document.getElementById('of-all-end-screen').innerHTML = questions.length;
    document.getElementById('play-area').style = 'display: none';
    
    if(correctQuestion >= questions.length / 2){
        SOUND_WIN.play();
        document.getElementById('endscreen-gif').src = './img/trophy.gif';
        document.getElementById('endscreen-title').innerHTML = `Glückwunsch!`
    }else{
        SOUND_LOOSE.play();
        document.getElementById('endscreen-gif').src = './img/loose.gif';
        document.getElementById('endscreen-title').innerHTML = `Versuch es noch einmal!`
    }
}

function goToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('of-all').innerHTML = questions.length;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer-1'];
    document.getElementById('answer-2').innerHTML = question['answer-2'];
    document.getElementById('answer-3').innerHTML = question['answer-3'];
    document.getElementById('answer-4').innerHTML = question['answer-4'];
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').style = `width:${percent}%`;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
}

function answer(selection){
    let question = questions[currentQuestion];
    let idOfCorrectAnswer = `answer-${question['correct_answer']}`;
    blockOtherAnswers();
    checkAnswer(idOfCorrectAnswer, selection);
    document.getElementById('next-question-btn').disabled = false;
}

function blockOtherAnswers(){
    document.getElementById('answer-1').parentNode.style = "pointer-events: none";
    document.getElementById('answer-2').parentNode.style = "pointer-events: none";
    document.getElementById('answer-3').parentNode.style = "pointer-events: none";
    document.getElementById('answer-4').parentNode.style = "pointer-events: none";
}

function checkAnswer(idOfCorrectAnswer, selection){
    selectionNumber = selection.slice(-1);
    if(selectionNumber == questions[currentQuestion]['correct_answer']){
        document.getElementById(selection).classList.add('bg-success');
        document.getElementById('amount-correct-questions').innerHTML = correctQuestion++ + 1;
        SOUND_SUCCESS.play();
        
    }else{
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfCorrectAnswer).classList.add('bg-success');
        SOUND_FAIL.play();
    }
}

function nextQuestion(){
    currentQuestion++; //wechselt zur nächsten Frage z.B. von 0 auf 1
    document.getElementById('next-question-btn').disabled = true;
    document.getElementById('current-number').innerHTML = currentQuestion + 1;
    resetAnswerButtons();
    init();
}

function resetAnswerButtons(){
    document.getElementById('answer-1').classList.remove('bg-success');
    document.getElementById('answer-2').classList.remove('bg-success');
    document.getElementById('answer-3').classList.remove('bg-success');
    document.getElementById('answer-4').classList.remove('bg-success');
    document.getElementById('answer-1').classList.remove('bg-danger');
    document.getElementById('answer-2').classList.remove('bg-danger');
    document.getElementById('answer-3').classList.remove('bg-danger');
    document.getElementById('answer-4').classList.remove('bg-danger');
    document.getElementById('answer-1').parentNode.style = '';
    document.getElementById('answer-2').parentNode.style = '';
    document.getElementById('answer-3').parentNode.style = '';
    document.getElementById('answer-4').parentNode.style = '';
}

function restartGame(){
    currentQuestion = 0;
    correctQuestion = 0;
    document.getElementById('end-screen-container').style = 'display: none';
    document.getElementById('play-area').style = '';
    document.getElementById('current-number').innerHTML = currentQuestion + 1;
    init();
}
