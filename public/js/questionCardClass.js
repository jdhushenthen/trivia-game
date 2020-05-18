// Card Class 

//var canvas = document.getElementById("gameScreen");
//var ctx = canvas.getContext('2d');

class Card{
    constructor(colour_of_card, xPos_card){
        this.colour = colour_of_card;
        this.xPos = xPos_card;
        this.yPos = 300;
        this.height = 0.40*canvas.height;
        this.width = 0.15*canvas.width;
    }

    displayCard(){
        ctx.strokeRect(this.xPos, this.yPos, this.width, this.height);
        //ctx.drawImage(cards,1850,860,width,height,(this.xPos+50),this.yPos,width,height);  
    }
}
//test code
//greenCard = new Card('blue', 150);
//greenCard.displayCard();

