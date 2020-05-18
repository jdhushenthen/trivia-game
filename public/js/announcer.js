//this class is for the announcer object that will appear and interact with users
//var canvas = document.getElementById("gameScreen");
//var ctx = canvas.getContext('2d');

//canvas.height = window.innerHeight;
//canvas.width = window.innerWidth;
    
var currentFrame = 0;

class announcer{
    constructor(){
        this.xPos = 0;
        this.yPos = 0;
        this.width = 100;
        this.height = 100;
        this.avatar = new Image();
        this.avatar.src = "announcer_sprite.png";
        this.frame = 0;
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
        
        function stopFunc(){
            clearInterval(x);
        }
        
        var x = setInterval(() => {
            this.announcerStill();
        }, 100);
        
        setTimeout(stopFunc,1000);
    }
    
    updateAnnouncer(){
        this.frame = ++this.frame % 2;
    }
        
    announcerStill(){
        this.updateAnnouncer()
        if(this.frame == 1){
            ctx.drawImage(this.avatar,80,32,26,40,this.xPos,this.yPos,100,100);
        }
        else if(this.frame == 0){
            ctx.drawImage(this.avatar,45,32,26,40,this.xPos,this.yPos,100,100);
        }      
    }
}

