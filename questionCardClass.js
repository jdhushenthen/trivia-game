// Card Class 

//var canvas = document.getElementById("gameScreen");
//var ctx = canvas.getContext('2d');

var width = 200;
var height = 210;

var cards = new Image();
cards.src = "spritesheet_poker_assets.png"

class Card{
    constructor(colour_of_card, xPos_card){
        this.colour = colour_of_card;
        this.xPos = xPos_card;
        this.yPos = 300;
        this.height = 230;
        this.width = 170;
    }

    displayCard(){
        ctx.drawImage(cards,1850,860,width,height,(this.xPos+50),this.yPos,width,height);  
    }
}
//test code
//greenCard = new Card('blue', 150);
//greenCard.displayCard();

