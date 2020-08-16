var timerHtml = $(".timer")
var currentTime = 30
var promptText= $(".prompt")
var startButton = $(".button")
var currentQuestion = 0
var totatlScore = $(".timer")
var quizQuestion = [ 
    {
        Question: "Javascript is a programming language used most often for:", 
        Choices: ["Webpage Interactivity", "Writing Emails", "42", "Making Margaritas"],
        Answer: "Webpage Interactivity"
    },    
    
    {
        Question: "Var in Javascript is a way to store ______ ?", 
        Choices: ["Information", "Tomatoes", "The Force", "Coffee"],
        Answer: "Information"
    }, 
    {
        Question: "A String is _____?", 
        Choices: ["Set of characters stored as a value", "Integer", "Function", "For Loop"],
        Answer: "Set of characters store as a value"
    }, 
    {
        Question: "For Loops are a way to", 
        Choices: ["Run functions over a set of data multiple times", "Eat cereal", "Erase every div in your html", "Hula-hoop backwards"],
        Answer: "Run functions over a set of data multiple times"
    }, 
    {
        Question: "What color is Purple?", 
        Choices: ["Red", "Green", "Purple", "Blue"],
        Answer: "Purple"
    },  
]




// Starting Text //
$(".prompt").html("<h2>Click the Button Below to Begin Your Quiz</h2>"); 
timerHtml.html(`<h2> ${currentTime} </h2>`);

// COUNTDOWN TIMER //
function countdown () {

   var interval = setInterval(function(){ 
        currentTime--;
        timerHtml.html(`<h2> ${currentTime} </h2>`);
        if (currentTime >= 0 && currentQuestion === quizQuestion.length){clearInterval(interval)
            alert("You win!");      
      } else if  (currentTime <= 0 || currentQuestion === quizQuestion.length){clearInterval(interval)
        alert("You have Lost!");
        };

        console.log(currentTime);
        return currentTime;
    
          
    }, 1000);
};


// STOP TIMER //
//function stopTimer(){
//  if (currentTime <= 0);
//}




// Current Question Given Quesiton # //
function displayQuestion(){

    $(".question-box").html(quizQuestion[currentQuestion].Question)
    $(".answer-box").html('');
     for(var i = 0; i < 4; i++){
         var choicehtml = document.createElement("button");
         choicehtml.setAttribute('class', "answer-choice");
         choicehtml.setAttribute('value', quizQuestion[currentQuestion].Choices[i])
            choicehtml.textContent = `${i + 1}. ${quizQuestion[currentQuestion].Choices[i]}` 
           choicehtml.onclick = answerSelected 
         $(".answer-box").append(choicehtml)
     }
   
}


//Answer Function //
function answerSelected (){

    console.log(this.value)
    if (this.value !== quizQuestion[currentQuestion].Answer){
        currentTime-= 10
     
    }
    // When answer is cliocked on move to the next question //
    currentQuestion++
    displayQuestion()
}

// Removes .prompt and "start" button when Start is clicked //
    function remove(){
        $(".prompt").html('');
        $(".submit").html('');
    }

  

// STARTQUIZ //
startButton.on("click",startQuiz);

function startQuiz (){
    countdown();
    displayQuestion();
    remove();
  
}