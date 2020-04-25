//class for question text

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

class questionScript{
    constructor(qData1, qData2){
        this.q1 = qData1;
        this.q2 = qData2;
        this.q3 = qData3;
        //this.q4 = qData4;
        //this.q5 = qData5;
    }

    displayQuestions(qNumber){
        if(qNumber == 1){
            ctx.fillText(this.q1[0], 100, 100);
            ctx.fillText(this.q1[1], 200, 100);
            ctx.fillText(this.q1[2], 300, 100);
            ctx.fillText(this.q1[3], 400, 100);
        }
        else if(qNumber == 2){
            ctx.fillText(this.q2[0], 100, 100);
            ctx.fillText(this.q2[1], 200, 100);
            ctx.fillText(this.q2[2], 300, 100);
            ctx.fillText(this.q2[3], 400, 100);
        }
        else if(qNumber == 2){
            ctx.fillText(this.q3[0], 100, 100);
            ctx.fillText(this.q3[1], 200, 100);
            ctx.fillText(this.q3[2], 300, 100);
            ctx.fillText(this.q3[3], 400, 100);
        }
    }
}
//test code
testQuestion =  new questionScript(["q1","q2","q3","q4"], ["q5","q6","q7","q8"], ["q9","q10","q11","q12"]);
testQuestion.displayQuestions(2);