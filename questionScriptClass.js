//class for question text

//var canvas = document.getElementById("gameScreen");
//var ctx = canvas.getContext('2d');

class questionScript{
    constructor(Questions, A, B, C, D, Answer){
        this.questions = Questions;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.xStart1 = 0;
        this.xStart2 = 0;
        this.xStart3 = 0;
        this.xStart4 = 0;
        this.yStart = 320;
        this.answers = Answer;
        this.questionNumber = 0;
        this.cardWidth;
    }

    set_xStart(x_start1, x_start2, x_start3, x_start4){
        this.xStart1 = x_start1;
        this.xStart2 = x_start2;
        this.xStart3 = x_start3;
        this.xStart4 = x_start4;
    }

    getRightAnswer(qNumber){
        let qAnswer = (this.answers)[qNumber];
        if(qAnswer == "A"){
            let minMax = [this.xStart1,(this.xStart1+this.cardWidth)];
            return minMax;
        }
        else if(qAnswer == "B"){
            let minMax = [this.xStart2,(this.xStart2+this.cardWidth)];
            return minMax;
        }
        else if(qAnswer == "C"){
            let minMax = [this.xStart3,(this.xStart3+this.cardWidth)];
            return minMax;
        }
        else if(qAnswer == "D"){
            let minMax = [this.xStart4,(this.xStart4+this.cardWidth)];
            return minMax;
        }
    }

    displayQuestions(qNumber){
        ctx.fillStyle = "black";
        ctx.fillText(this.questions[qNumber], canvas.width*0.1, canvas.height*0.1);
        ctx.font = "16px Arial";
        ctx.fillText(this.A[qNumber], (this.xStart1+20), this.yStart);
        ctx.fillText(this.B[qNumber], (this.xStart2+20), this.yStart);
        ctx.fillText(this.C[qNumber], (this.xStart3+20), this.yStart);
        ctx.fillText(this.D[qNumber], (this.xStart4+20), this.yStart);
        ctx.font = "48px Arial";
    }
    newQuestion(){
        this.questionNumber = this.questionNumber + 1;
    }
}
