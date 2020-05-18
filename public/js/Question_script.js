var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

ctx.textAlign = "center";

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var offset = 0.05*canvas.width;
var margin = 0.10*canvas.width;
var card_width = 0.15*canvas.width;

let pos1 = offset;
let pos2 = offset + card_width + margin;
let pos3 = offset +2*card_width + 2*margin;
let pos4 = offset +3*card_width + 3*margin;

background = new Image();
background.src = "game-background-2-x.jpg"

game_speaker = new announcer();
game_speaker.relocate_announcer(canvas.width/2,100)

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
questionForGame.set_xStart(pos1,pos2,pos3,pos4);
questionForGame.cardWidth = card_width;

//intro text to screen
ctx.font = "48px Arial";
ctx.strokeStyle = "black";
ctx.drawImage(background,0,0,canvas.width,canvas.height);
ctx.fillText("Welcum Boyz", 300, 75);
moderator.display_announcer();

//calls timeout then executes 
setTimeout(yo, 2000);

//instantiates cards, questions, and question counter
greenCard = new Card('green',pos1);
redCard = new Card('red',pos2);
blueCard = new Card('blue',pos3);
yellowCard = new Card('yellow',pos4);



//displays card to screens
function drawCards(){
   greenCard.displayCard();
   redCard.displayCard();
   blueCard.displayCard();
   yellowCard.displayCard();
}

function nextQuestionText(){
    removeEventListener('click', gameLoop);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Click for the next question", 300, 75)
    addEventListener('click', gameLoop)
}


function yo(){
    //removeEventListener('click', gameLoop);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_speaker.speak("Click if you're ready to play")
    //ctx.fillText("Click if you're ready to play", 300, 75);
    addEventListener('click', gameLoop);    
};


function rightAnswer(){
    window.removeEventListener('click',check_rightwrong);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_speaker.speak("You got it bud");
    //ctx.fillText("You got it bud!", 300, 75);
    console.log('r');
    setTimeout(nextQuestionText,2000);
}

function wrongAnswer(){
    window.removeEventListener('click',check_rightwrong);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_speaker.speak("Wrong, step up ur game kid");
    //ctx.fillText("Wrong, step up ur game kid", 300, 75);
    console.log('w');
    setTimeout(nextQuestionText,2000);
}

function nextQuestion(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    
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


    

