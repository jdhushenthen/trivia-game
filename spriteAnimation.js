


function updateFrame(){
    currentFrame = ++currentFrame % 2;
}

function drawCharacter(draw_x,yPos){
    updateFrame();
    if(currentFrame == 1){
        ctx.drawImage(gameChar,80,32,26,40,draw_x,this.yPos,100,100);
    }
    else if(currentFrame == 0){
        ctx.drawImage(gameChar,45,32,26,40,draw_x,this.yPos,100,100);
    }
}

ctx.fillText(words, (this.xPos+0.5*this.width), (this.yPos-10));
function stopFunc(){
    clearInterval(x);
}

var x = setInterval(() => {
    drawCharacter();
}, 100);

setTimeout(stopFunc,3000);



  

