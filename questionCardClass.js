// Card Class 

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

class Card{
    constructor(colour_of_card, xPos_card){
        this.colour = colour_of_card;
        this.xPos = xPos_card;
        this.yPos = 300;
        this.height = 230;
        this.width = 170;
    }

    displayCard(){
        ctx.strokeStyle = this.colour;
        ctx.strokeRect(this.xPos, this.yPos, this.width, this.height);
    }
}

//test code
greenCard = new Card('blue', 150);
greenCard.displayCard();

