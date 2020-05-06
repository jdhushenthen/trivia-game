var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');


var width = 200;
var height = 210;

var cards = new Image();
cards.src = "spritesheet_poker_assets.png"

sprite = new Card_animate();

let lastTime = 0;
function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,1000,600);

    sprite.update(deltaTime);
    sprite.draw(ctx);

    console.log('loop');
    requestAnimationFrame(gameLoop);

}

addEventListener("load", ()=>{
    requestAnimationFrame(gameLoop);
});