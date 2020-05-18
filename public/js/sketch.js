window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

   //
   let painting = false; 

   function startPosition(e){
       painting = true;
       draw(e);
   }

   function finishedPosition(){
       painting = false;
       ctx.beginPath();
   }

   function draw(e){
       if(!painting) return;
       ctx.lineWidth = 10;
       ctx.lineCap = 'round';

       ctx.lineTo(e.clientX, e.clientY);
       ctx.stroke();
       ctx.beginPath();
       ctx.moveTo(e.clientX, e.clientY)
   }
   //EventListeners
   canvas.addEventListener('mousedown', startPosition)
   canvas.addEventListener('mouseup', finishedPosition)
   canvas.addEventListener('mousemove', draw)


});

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});