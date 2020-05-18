window.addEventListener("load",()=>{
    var canvasOne = document.querySelector("#gameScreenOne");
    var ctxOne = canvasOne.getContext("2d");
    var saveDrawing = document.querySelector("#saveDrawing")
    ctxOne.fillText("hello", 200, 200, 500)
    

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctxOne.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctxOne.lineWidth = 10;
        ctxOne.lineCap = "round";

        ctxOne.lineTo(e.clientX, e.clientY);
        ctxOne.stroke();
        ctxOne.beginPath();
        ctxOne.moveTo(e.clientX, e.clientY);
    }

    canvasOne.addEventListener('mousedown', startPosition);
    canvasOne.addEventListener('mouseup', finishedPosition);
    canvasOne.addEventListener('mousemove', draw);
   
    saveDrawing.addEventListener("click", function () {
        var imgConverted = document.querySelector("#imgConverted")
        var dataURI = canvasOne.toDataURL();
        imgConverted.src = dataURI;
        
    })
    
    clearCanvas.addEventListener("click", function() {
        var canvasOne = document.querySelector("#gameScreenOne")
        canvasOne.clearRect(0, 0, 600, 600);
    })

});