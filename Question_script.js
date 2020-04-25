var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

ctx.font = "16px Arial";
ctx.strokeStyle = "black";
ctx.fillText("Welcum Boyz", 300, 75);

setTimeout(yo, 2000);

function drawCards(){
    let cardY = 300;
    let cardWidth = 170;
    let cardHeight = 230;

    ctx.clearRect(0, 0, 800, 600);
    
    ctx.strokeStyle = 'red';
    ctx.strokeRect(10, cardY, cardWidth, cardHeight);
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(190, cardY, cardWidth, cardHeight);
    ctx.strokeStyle = 'green';
    ctx.strokeRect(370, cardY, cardWidth, cardHeight);
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(550, cardY, cardWidth, cardHeight);
}

function nextQuestionText(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click for the next question", 300, 75)
}

function yo(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("Click if you're ready to play", 300, 75);
    addEventListener('click', gameLoop);    
};


function rightAnswer(){
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillText("You got it bud!", 300, 75);
    setTimeout(nextQuestionText,2000);
    addEventListener('click', () =>{
        nextQuestion("Who's the best poker player?", "wames jong", "hyunwoo", "anderson", "noodle", 4);
    });  
}

function nextQuestion(question, text1, text2, text3, text4, rightCard){
    ctx.clearRect(0, 0, 800, 600);
    
    drawCards();

    ctx.fillText(question, 300, 75);
    ctx.fillText(text1, 60, 350);
    ctx.fillText(text2, 240, 350);
    ctx.fillText(text3, 420, 350);
    ctx.fillText(text4, 590, 350);

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
    nextQuestion("who is the thiccest??","Janny","Marvin","Brando","Big D-shaan", 1);
    //setTimeout(ctx.clearRect(0, 0, 800, 600),2000);
    //setTimeout(ctx.fillText("Click for the next question", 300, 75),2001);
    //addEventListener('click', () =>{
        //nextQuestion("Who's the best poker player?", "wames jong", "hyunwoo", "anderson", "noodle", 4);
   // });  
};


    

