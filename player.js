
class Player {
    constructor(name, points){
        this.name = name 
        this.points = points 
        
    }
    scoreIncrease(){
        this.points = this.points + 1;
        console.log(playerOne)
        console.log(playerTwo)
    }
    playerIcon(){

    }
}

var nameOne = prompt("What is your name?")
var playerOne = new Player("Player One: " + nameOne, 0);
var nameTwo =  prompt("What is your name?")
var playerTwo = new Player("Player Two: " + nameTwo, 0);

addEventListener('click',() =>{
    playerOne.scoreIncrease();
    playerTwo.scoreIncrease();
})
   
window.addEventListener("load",()=>{
    const canvasOne = document.querySelector("#gameScreenOne");
    var ctxOne = canvasOne.getContext("2d");
    var ctxTwo = canvasOne.getContext("2d");

    ctxOne.fillText(playerOne.name, 50, 575, 200)
    ctxTwo.fillText(playerTwo.name, 350, 575, 200) 
    ctxOne.fillText("Points " + playerOne.points, 50, 585, 200)
    ctxOne.fillText("Points " + playerTwo.points, 350, 585, 200)

window.addEventListener("click", ()=>{
        ctxOne.clearRect(0, 0, 600, 600);
        ctxOne.fillText(playerOne.name, 50, 575, 200)
        ctxTwo.fillText(playerTwo.name, 350, 575, 200) 
        ctxOne.fillText("Points " + playerOne.points, 50, 585, 200)
        ctxOne.fillText("Points " + playerTwo.points, 350, 585, 200)
})
});




    



