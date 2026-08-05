function Canvas(){
    var Type = document.getElementsByName("haha");
    var get = "";
    var i = 0;
    for(i = 0; i < Type.length; i++){
        if(Type[i].checked)
            get = Type[i].id;
    }
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    var Title = document.getElementById("title").value;
    var Val = document.getElementById("giatri").value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(get == "C"){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(100,80,50,0,Math.PI*2, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    else if(get == 'L'){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";
        ctx.moveTo(50,20);
        ctx.lineTo(120,100);
        ctx.lineTo(50,170);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    else if(get == 'P'){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "blue";
        ctx.roundRect(50,20,100,70,20);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}