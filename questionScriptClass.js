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
        this.answers = Answer;
        this.questionNumber = 0;
    }
    getRightAnswer(qNumber){
        let qAnswer = (this.answers)[qNumber];
        if(qAnswer == "A"){
            let minMax = [10,180];
            return minMax;
        }
        else if(qAnswer == "B"){
            let minMax = [190,360];
            return minMax;
        }
        else if(qAnswer == "C"){
            let minMax = [370,540];
            return minMax;
        }
        else if(qAnswer == "D"){
            let minMax = [550,720];
            return minMax;
        }
    }

    displayQuestions(qNumber){
        ctx.fillStyle = "black";
        ctx.fillText(this.questions[qNumber], 100, 75);
        ctx.fillText(this.A[qNumber], 70, 320);
        ctx.fillText(this.B[qNumber], 250, 320);
        ctx.fillText(this.C[qNumber], 430, 320);
        ctx.fillText(this.D[qNumber], 610, 320);
    }
    newQuestion(){
        this.questionNumber = this.questionNumber + 1;
    }
}
