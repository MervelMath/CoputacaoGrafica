"use sctrict";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 200, y = 200, larg = 10, alt = 10;
var ang = 20;

// function desenhar(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    
    
//     ctx.save(); //Salva o retângulo no começo (y=0).
//         //Desenhando retângulo:
//         ctx.translate(x,y); //Move o retângulo para um ponto que queremos. Senão ele fica cortado, pois desenhamos ele no y=0.
//         ctx.fillStyle = "rgb(0, 0,0)";
//         ctx.fillRect(-larg/2, 0, larg, alt); //Desenho do retângulo, usando as coordenadas do gráfico.
//         //Restaura o retêngulo para o último save.
        
//         //Após restaurarmos, o retângulo é movido rapidamente para a posição especificada no translate,
//         // e não percebemos que ele voltou ao início.

//         //Desenhando um triângulo em cima do retângulo:
//         ctx.fillStyle = "rgb(100, 100,0)";
//         ctx.beginPath();
//         ctx.moveTo(-larg/2,0);
//         ctx.lineTo(0, -alt);
//         ctx.lineTo(larg/2, 0);
//         ctx.fill();

//     ctx.restore();
//     desenharTriangulo();
//     requestAnimationFrame(desenhar);
// }

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(0, 0,0)";
    ctx.strokeStyle = "rgb(50, 200, 200)";
    ctx.lineWidth = 2;
    ctx.save();
        ctx.translate(x, y);
        //ctx.rotate(ang);
        var ca = Math.cos(ang);
        var sa = Math.sin(ang);
        ctx.transform(ca, sa, -sa, ca, 0, 0); //Criando rotação manualmente, com matriz.
        ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(50,0);
        ctx.stroke();
        ctx.fillRect(-larg/2, -alt/2, larg, alt);
    ctx.restore();
    requestAnimationFrame(desenhar);
}
    

function desenharTriangulo(){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y+50);
    ctx.lineTo(x-50,y+50);
    ctx.fillStyle = "rgb(255, 222,0)";
    ctx.fill();
    ctx.closePath();
    desenharCirculo();
 }

 function desenharCirculo(){
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI)
    ctx.fillStyle = "rgb(111, 222,0)";
    ctx.fill();
 }

    function leftArrowPressed() {
    x -= 5;
    ang += 10;
    }

    function rightArrowPressed() {
    x += 5;
    ang -= 10;
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