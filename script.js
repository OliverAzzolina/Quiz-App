let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Lady Gaga",
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
        "answer_1": "<!DOCTYPE html>",
        "answer_2": "<start html>",
        "answer_3": "<HTML lets GO!>",
        "answer_4": "<html>",
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

function init(){
    document.getElementById('ofall').innerHTML = questions.length;
    

}