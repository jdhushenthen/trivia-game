//this class is for the announcer object that will appear and interact with users
class announcer{
    constructor(){
        this.xPos = 0;
        this.yPos = 0;
        this.width = 100;
        this.height = 100;
        this.avatar = new Image();
        this.avatar.src = 'https://icon2.cleanpng.com/20180425/vzq/kisspng-cairns-handyman-home-repair-landscape-maintenance-announcer-5ae148a7147d12.1103336515247136390839.jpg'
    }
    
    display_announcer(){
        ctx.drawImage(this.avatar, this.xPos, this.yPos, this.width, this.height);
    }

    relocate_announcer(new_x, new_y){
        this.xPos = new_x;
        this.yPos = new_y;
    }

    resize_announcer(new_width, new_height){
        this.width = new_width;
        this.height = new_height;
    }

    speak(words){
        ctx.fillText(words, (this.xPos+0.5*this.width), (this.yPos-10));
    }
}

