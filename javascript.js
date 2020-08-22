var timerHtml = $(".timer")
var currentTime = 30
var promptText= $(".prompt")
var startButton = $(".button")
var currentQuestion = 0
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


// STARTQUIZ //
startButton.on("click",startQuiz);



// COUNTDOWN TIMER //
function countdown () {
   
   var interval = setInterval(function(){ 
        currentTime--;    
        timerHtml.html(`<h2> ${currentTime} </h2>`);
        if (currentTime >= 0 && currentQuestion === quizQuestion.length){clearInterval(interval)
            alert("You win!");   
      } else if  (currentTime <= 0){clearInterval(interval);
        alert("You have Lost!")};
        console.log(currentTime);
        return currentTime;
    }, 1000);
};


  
// Current Question Given Quesiton # //
function displayQuestion(){

    if (currentQuestion === quizQuestion.length){
        remove(".answer-box");
        console.log('Score :  ' + currentTime);
         $(".question-box").html(`<input type="text" id="scoreBox" name="scoreBox" required
         minlength="1" maxlength="10" size="10"> <button class="highScoreBtn">Save</button>`)}
    else {
        $(".question-box").html(quizQuestion[currentQuestion].Question)
        $(".answer-box").html('');
     for(var i = 0; i < quizQuestion[i].Choices.length; i++){
         var choicehtml = document.createElement("button");
         choicehtml.setAttribute('class', "answer-choice");
         choicehtml.setAttribute('value', quizQuestion[currentQuestion].Choices[i])
            choicehtml.textContent = `${i + 1}. ${quizQuestion[currentQuestion].Choices[i]}` 
           choicehtml.onclick = answerSelected 
         $(".answer-box").append(choicehtml)
     }
     }
     if (currentQuestion === quizQuestion.length){
         alert("Your score is : " + (currentTime));
          $(".question-box").append(" ");
          $(".page-header").html(`Please Add Your Name to Log Score`);
        $(".answer-box").html('')
                   
     }
    }
    

//Answer Function //
function answerSelected (){=
    console.log(this.value)
    if (this.value !== quizQuestion[currentQuestion].Answer){
        currentTime-= 10
    }
    currentQuestion++
    displayQuestion()
}

// Removes .prompt and "start" button when Start is clicked //
    function remove(){
        $(".prompt").html('');
        $(".submit").html('');
    }

 function scoreRemove(){
 $("#answer-box").html()
}

// Saves Initals & High Score//
$(document).on("click", function() {
    if (currentQuestion === quizQuestion.length){
    event.preventDefault()
    var highScore = currentTime;
    var initials = $('#scoreBox').val()
    scoreRemove()
    localStorage.setItem("username", initials)
    localStorage.setItem("score", JSON.stringify(highScore))
    console.log(initials, highScore)
    $("#answer-box").html(initials + highScore);
}
    
})

 
function startQuiz (){
    countdown();
    displayQuestion();
    remove();
  }