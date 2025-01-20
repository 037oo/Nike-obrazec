var menu=document.getElementById("menu");
var menuBox=document.getElementById("menuDiv");
var cross=document.getElementById("cross");
var menutick=false;

function crossBar(){
    menuBox.classList.add("closed");
    menutick=false;
}
function menuBar(){
    if(menutick==false){
        menuBox.classList.remove("closed");
        menuBox.style.display="flex";
        menutick=true;
    }
    else{
        menuBox.classList.add("closed");
        menutick=false;
    }
}
function menuBarClose(){
    menuBox.classList.add("closed");
    menutick=false;
}

function draw(){
    var cnv = document.getElementById("cnv");
    var ctx = cnv.getContext("2d");

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";

    ctx.scale(0.2, 0.2);

    ctx.translate(-40, -80);
    ctx.beginPath();
    ctx.moveTo(97.25, 143.75);
    ctx.bezierCurveTo(97.25, 143.75, 70.5, 201.5, 110.75, 216.5);
    ctx.bezierCurveTo(126, 226.5, 164.75, 212.75, 164.75, 212.75);
    ctx.bezierCurveTo(164.75, 212.75, 466.75, 130.25, 466.75, 130.25);
    ctx.bezierCurveTo(466.75, 130.25, 232.67, 232, 233.33, 232.67);
    ctx.bezierCurveTo(234, 233.33, 137, 273.75, 137, 273.75);
    ctx.bezierCurveTo(137, 273.75, 65.27, 302.73, 48.36, 254.18);
    ctx.bezierCurveTo(35.27, 207.64, 97.25, 143.75, 97.25, 143.75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
document.addEventListener("DOMContentLoaded", e => {
    draw();
})
