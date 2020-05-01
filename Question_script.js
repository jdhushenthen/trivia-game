var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

var image = new Image();
image.src = "https://gdb.rferl.org/466DA44A-332F-49CB-994F-247CF47FB7A3_w1597_n_r1_st.jpg"

moderator = new announcer();
Q_array = getQuestion();
A_array = getA();
B_array = getB();
C_array = getC();
D_array = getD();
Ans_array = getAnswer();

questionForGame = new questionScript(Q_array, A_array, B_array, C_array, D_array, Ans_array);

//intro text to screen
ctx.font = "16px Arial";
ctx.strokeStyle = "black";
ctx.fillText("Welcum Boyz", 300, 75);
moderator.display_announcer();

//calls timeout then executes 
setTimeout(yo, 2000);

//instantiates cards, questions, and question counter
greenCard = new Card('green',10);
redCard = new Card('red',190);
blueCard = new Card('blue',370);
yellowCard = new Card('yellow',550);



//displays card to screens
function drawCards(){
   ctx.clearRect(0,0,800,600);
   greenCard.displayCard();
   redCard.displayCard();
   blueCard.displayCard();
   yellowCard.displayCard();
}

function nextQuestionText(){
    removeEventListener('click', gameLoop);
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click for the next question", 300, 75)
    addEventListener('click', gameLoop)
}


function yo(){
    //removeEventListener('click', gameLoop);
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click if you're ready to play", 300, 75);
    addEventListener('click', gameLoop);    
};


function rightAnswer(){
    window.removeEventListener('click',check_rightwrong);
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("You got it bud!", 300, 75);
    console.log('r');
    setTimeout(nextQuestionText,2000);
}

function wrongAnswer(){
    window.removeEventListener('click',check_rightwrong);
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Wrong, step up ur game kid", 300, 75);
    console.log('w');
    setTimeout(nextQuestionText,2000);
}

function nextQuestion(){
    ctx.clearRect(0, 0, 800, 600);
    
    drawCards();

    questionForGame.displayQuestions(questionForGame.questionNumber);
    
    window.addEventListener('click',check_rightwrong);
};

function check_rightwrong(e){
    rightCard = questionForGame.getRightAnswer(questionForGame.questionNumber);
    
    let rightCardY_min = 300;
    let rightCardY_max = 530;
    if((e.x > rightCard[0]) && (e.x < rightCard[1])){
        if((e.y > rightCardY_min) && (e.y < rightCardY_max)){
        rightAnswer();
        }
    }
    else{
        wrongAnswer();
    }
}

function gameLoop(){
    removeEventListener('click', gameLoop);
    questionForGame.questionNumber = questionForGame.questionNumber + 1;
    nextQuestion(questionForGame.questionNumber);
};


    

