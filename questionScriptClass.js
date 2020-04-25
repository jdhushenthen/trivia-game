//class for question text

//var canvas = document.getElementById("gameScreen");
//var ctx = canvas.getContext('2d');

class questionScript{
    constructor(qData1, qData2, qData3){
        this.q1 = qData1;
        this.q2 = qData2;
        this.q3 = qData3;
        //this.q4 = qData4;
        //this.q5 = qData5;
        this.questionNumber = 0;
    }
    getRightAnswer(qNumber){
        if(qNumber == 1){
            let minMax = [10,180];
            return minMax;
        }
        else if(qNumber == 2){
            let minMax = [190,360];
            return minMax;
        }
        if(qNumber == 3){
            let minMax = [370,540];
            return minMax;
        }
    }

    displayQuestions(qNumber){
        if(qNumber == 1){
            ctx.fillText(this.q1[0], 300, 75);
            ctx.fillText(this.q1[1], 20, 320);
            ctx.fillText(this.q1[2], 200, 320);
            ctx.fillText(this.q1[3], 380, 320);
            ctx.fillText(this.q1[4], 560, 320);
        }
        else if(qNumber == 2){
            ctx.fillText(this.q2[0], 300, 75);
            ctx.fillText(this.q2[1], 20, 320);
            ctx.fillText(this.q2[2], 200, 320);
            ctx.fillText(this.q2[3], 380, 320);
            ctx.fillText(this.q2[4], 560, 320);
        }
        else if(qNumber == 3){
            ctx.fillText(this.q3[0], 300, 75);
            ctx.fillText(this.q3[1], 20, 320);
            ctx.fillText(this.q3[2], 200, 320);
            ctx.fillText(this.q3[3], 380, 320);
            ctx.fillText(this.q3[4], 560, 320);
        }
    }
    newQuestion(){
        this.questionNumber = this.questionNumber + 1;
    }
}
//test code
//testQuestion =  new questionScript(["q1","q2","q3","q4"], ["q5","q6","q7","q8"], ["q9","q10","q11","q12"]);
//testQuestion.displayQuestions(3);