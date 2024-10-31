//Array of object data
const quizData = [
    {
        question: 'What planet are we on?',
        options: ['Mercury', 'Saturn', 'Earth', 'Neptune'],
        answer: 'Earth'
    },
    {
        question: 'What is the sun?',
        options: ['A star', 'A planet', 'A satellite', 'A galaxy'],
        answer: 'A star'
    },
    {
        question: 'What is Earth?',
        options: ['A star', 'A planet', 'A satellite', 'A galaxy'],
        answer: 'A planet'
    },
    {
        question: 'What is the unit for force?',
        options: ['Ampere', 'Volt', 'Newton', 'Ohms'],
        answer: 'Newton'
    },
    {
        question: 'How many legs does a spider have?',
        options: ['Five', 'Eight', 'Ten', 'Seven'],
        answer: 'Eight'
    },
    {
        question: 'Which fruit is associated with Isaac Newton and gravity?',
        options: ['Grapes', 'Cashew', 'Watermelon', 'Apple'],
        answer: 'Apple'
    },
    {
        question: 'What is the process of a liquid turning into a gas called?',
        options: ['Melting', 'Evaporation', 'Freezing', 'condensation'],
        answer: 'Evaporation'
    },
    {
        question: 'How many bones are there in the adult human body?',
        options: [360, 110, 206, 419],
        answer: 206
    },
    {
        question: 'How many teeth does an adult have?',
        options: [36, 32, 18, 20],
        answer: 32
    },
    {
        question: 'Animals that eat both plants and meat are called what?',
        options: ['Omnivores', 'Canivores', 'Harbivores', 'Plant And Animal vores'],
        answer: 'Omnivores'
    }

]
const quizContainer = document.getElementById('quiz'); //get the element that will display the question and option
const resultContainer = document.getElementById('result');// get the element to display result
const submitButton = document.querySelector('#submit'); //get the submit button
const retryButton = document.getElementById('retry'); //get the retry button

let currentQuestion = 0; //initializing current question to zero
let score = 0 //intitializing current score

//function that will display questions
function displayQuestion() {
    const questionData = quizData[currentQuestion]; //giving the first object a name
    
    const questionElement = document.createElement('div'); //creating a div element to house questions
    questionElement.className = 'question'; //giving the div element a class name of question
    questionElement.textContent = questionData.question; //the text content of the div element is the object.question
    
    const optionElement = document.createElement('div'); //creating a div element to house options
    optionElement.className = 'options'; //giving it a classname of options

    const optionsData = questionData.options; //putting the array of options inside a variable
    for (i = 0; i < optionsData.length; i++) { //looping through the array
        const option = document.createElement('label'); //creating each label element to display each option
        option.className = 'option'; //giving it a className of option
        
        const radio = document.createElement('input') //creating a radio button for the options  
        radio.type = 'radio'; //type radio button, so the options are clickable
        radio.name = 'quiz'; //i gave it a name of quiz
        radio.value = optionsData[i]; //i gave it a value of each options

        const optionText = document.createTextNode(optionsData[i]) //creating a text node of each values

        option.appendChild(radio); //append the radio button to the label element
        option.appendChild(optionText); //append the textnode of each element to the label element
        optionElement.appendChild(option); //append the label element to the div element housing the options
        
    }
    quizContainer.innerHTML = ''; //empty the div element to display questions and answers
    quizContainer.appendChild(questionElement); //append the question div to the div element housing question and option
    quizContainer.appendChild(optionElement); //append the option div to the div element housing question and option
    
    
}
//function to check answer
function checkAnswer() {
    selectedOption = document.querySelector('input[name = "quiz"]:checked')// get the radio button that is checked
    
    if (selectedOption) { //if radio button that is checked
        const answer = selectedOption.value; //value of checked radio button
        if (answer === quizData[currentQuestion].answer) { //value of checked radio button === answer of the question
            score++; //score = score + 1
        } else {
            answer === 'incorrect'; //value of checked radio button === incorrect
        }
    }
    currentQuestion++; //currentQuestion = currentQuestion + 1 
    selectedOption === false; // when selected option is false nothing happens
    if(currentQuestion < quizData.length) { //if currentQuestion < array of object length 
        displayQuestion(); //display question
    } else {
        displayResult(); //display result 
    }
}
//function to display result
function displayResult() { 
    quizContainer.style.display = 'none'; //element housing the question and option should be hidden
    submitButton.style.display = 'none'; //submit buton should be hidden
    retryButton.style.display = 'inline-block'; //retry button should be displayed
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`; //text content of result element should display score and quiz length
}
//function to retry quiz
function retryQuiz() {
    currentQuestion = 0; //current question = 0
    score = 0; //score = 0
    quizContainer.style.display = 'block'; //element housing the question and element display block
    submitButton.style.display = 'inline-block'; //submit button diplay 
    retryButton.style.display = 'none'; //retry button hidden
    resultContainer.innerHTML = ''; //result element empty
    displayQuestion(); //then display question

}

submitButton.addEventListener('click', checkAnswer); //when you click on the submit button, checkAnswer function is triggered
retryButton.addEventListener('click', retryQuiz); //when you click on the retry button, retryQuiz is triggered

displayQuestion(); //calls displayQuestion




