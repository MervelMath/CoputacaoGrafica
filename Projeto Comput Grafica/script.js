"use sctrict";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 100, y = 50, larg = 300, alt = 150;

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(0, 0,0)";
    ctx.fillRect(x, y, larg, alt);
    requestAnimationFrame(desenhar);
}

function leftArrowPressed() {
    x -= 5;
    }

    function rightArrowPressed() {
    x += 5;
    }

    function upArrowPressed() {
    y -= 5;
    }

    function downArrowPressed() {
    y +=5;
    }

document.onkeydown = function (evento){
    console.log(evento.keyCode); //Mostra os valores das teclas no console do Chrome.
    
    switch (evento.keyCode) {
        case 37:
        leftArrowPressed();
        break;
        case 39:
        rightArrowPressed();
        break;
        case 38:
        upArrowPressed();
        break;
        case 40:
        downArrowPressed();
        break;
        }
}

requestAnimationFrame(desenhar);