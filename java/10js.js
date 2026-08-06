let canvas = document.getElementById("my");
let ctx = canvas.getContext("2d");
canvas.style.background = "#10deec"  
var x =0, y = 150;
function move(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath()
        ctx.fillStyle = "#c32020";
    ctx.arc(x,y,100,0,Math.PI * 2,false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    x += 1;
    if(x > canvas.width + 50){
        x = -50;
    }
    // Lặp lại
    requestAnimationFrame(move);
}
move();
ctx.save();
ctx.translate(107,-35);
ctx.rotate(45 * Math.PI / 180)
ctx.fillStyle = "yellow";
ctx.fillRect(20,30,140,140);
ctx.restore(); // trả lại trạng thái 

ctx.save();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.font = "40px Arial";
ctx.fillStyle = "white";
ctx.fillText("HTML5",35,110);
ctx.strokeText("HTML5",35,110);
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();
ctx.restore();





ctx.fillStyle = "red";
ctx.fillRect(100,10,50,20);
ctx.strokeStyle = "pink";
ctx.lineWidth = 3;
ctx.strokeRect(100,10,50,20)



ctx.fillStyle = "red";
ctx.roundRect(80,180,300,240,20);
ctx.fill();



ctx.beginPath();
ctx.fillStyle = "White";
ctx.strokeStyle = "black";
ctx.lineWidth = "4";
ctx.moveTo(200,200);
ctx.lineTo(300,300);
ctx.lineTo(200,400);
ctx.closePath();
ctx.stroke();
ctx.fill();

