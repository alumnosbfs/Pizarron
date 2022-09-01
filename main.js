var mouse = "empty";
var  uPositionX, UPositiony;
canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d");

var color="aqua";
var anchodelinea = 5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    mouse="mouseDown"
}
canvas.addEventListener ("mouse", my_mousemove);
function my_mousemove(e) {
    PosicionActualX=e.clientX-canvas.offsetLeft
    PosicionActualY=e.clientX-canvas.offsetTop
if(mouse=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = anchodelinea;    
console.log("Ultima Posicion y coordenadas=")
console.log("x="+uPositionX +"y="+UPosicionY);
ctx.moveTo(uPositionX,UPosicionY)
console.log("Posicion actual de las cordenadas")
console.log("x="+PositionX +"y="+PosicionY);
ctx.lineTo(PosicionActualX,PosicionActualY);
ctx.stroke();
}
uPositionX=PosicionActualX
uPositiony=PosicionActualY
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse ="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouse ="mouseleave";
}



