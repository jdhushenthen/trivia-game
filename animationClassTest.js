class Card_animate {
    constructor(){
        this.positionX = 10;
        this.positionY = 500;
        this.speedY = -5;
    }
    draw(ctx) {
        ctx.drawImage(cards,1850,860,width,height,0,this.positionY,width,height);
    }
    update(deltaTime) {
        this.positionY += this.speedY;
    }
};