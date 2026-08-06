var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var W_width = window.innerWidth;
var W_height = window.innerHeight;
canvas.height = W_height;
canvas.width = W_width;
canvas.style.background = "#ff8";
    var count = 1;
    ctx.clearRect(0 ,0 , W_width, W_height);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(100,100,50,0,Math.PI * 2,false);
    ctx.stroke();
    ctx.closePath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center"
    ctx.textBaseline = "middle";
    ctx.fillText(count,100,100);

    var x = 100;
    var y = 100;
    var dx = 2;
    var dy = 2;
    var run = false;
function Move(){
    if(!run) return;
    ctx.clearRect(0 ,0 , W_width, W_height);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(x,y,50,0,Math.PI * 2,false);
    ctx.stroke();
    ctx.closePath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center"
    ctx.textBaseline = "middle";
    ctx.fillText("1",x,y);
    if(x + 50 > W_width){
        dx = -dx;
        count++;
    }
    if(x - 50 < 0)
        dx = -dx;
    if(y + 50 > W_height)
        dy = -dy;
    if(y - 50 < 0)
        dy = -dy;
    x += dx;
    y += dy;
    requestAnimationFrame(Move);
}
function start(){
    if(!run){
        run = true;
        Move();
    }
}
function Stop(){
    run = false;
}



