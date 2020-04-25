var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');


//intro text to screen
ctx.font = "16px Arial";
ctx.strokeStyle = "black";
ctx.fillText("Welcum Boyz", 300, 75);

//calls timeout then executes 
setTimeout(yo, 2000);

//instantiates cards, questions, and question counter
greenCard = new Card('green',10);
redCard = new Card('red',190);
blueCard = new Card('blue',370);
yellowCard = new Card('yellow',550);

questionForGame = new questionScript(["Question1", "answer", "anser","anseer","antser"],["Kwestion2","this","thiss","thisss","thees"],["question3!","pick me","me!","not me","911 was an inside job"]);

//displays card to screens
function drawCards(){
   ctx.clearRect(0,0,800,600);
   greenCard.displayCard();
   redCard.displayCard();
   blueCard.displayCard();
   yellowCard.displayCard();
}

function nextQuestionText(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click for the next question", 300, 75)
    addEventListener('click', gameLoop)
}


function yo(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click if you're ready to play", 300, 75);
    addEventListener('click', gameLoop);    
};


function rightAnswer(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("You got it bud!", 300, 75);
    console.log(questionForGame.questionNumber);
    setTimeout(nextQuestionText,2000);
}

function nextQuestion(){
    ctx.clearRect(0, 0, 800, 600);
    
    drawCards();

    questionForGame.displayQuestions(questionForGame.questionNumber);
    rightCard = questionForGame.getRightAnswer(questionForGame.questionNumber);

    var rightCardX_min = 0;
    var rightCardX_max = 0;
    var rightCardY_min = 300;
    var rightCardY_max = 530;

    if(rightCard == 1){
        rightCardX_min = 10;
        rightCardX_max = 180;
    }
    else if(rightCard == 2){
        rightCardX_min = 190;
        rightCardX_max = 360;
    }
    else if(rightCard == 3){
        rightCardX_min = 370;
        rightCardX_max = 540;
    }
    else if(rightCard == 4){
        rightCardX_min = 550;
        rightCardX_max = 720;
    }
    
    window.addEventListener('click', (e) =>{
        if((e.x > rightCardX_min) && (e.x < rightCardX_max)){
            if((e.y > rightCardY_min) && (e.y < rightCardY_max)){
            rightAnswer();
            }
        }
    });
};

function gameLoop(){
    questionForGame.questionNumber = questionForGame.questionNumber + 1;
    nextQuestion(questionForGame.questionNumber);
};


    

