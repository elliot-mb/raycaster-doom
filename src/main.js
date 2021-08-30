import Player from "./player.js";
import Rays from "./rays.js";

var canvas = document.getElementById("canvas"); //links the script to the canvas in html
var ctx = canvas.getContext("2d"); //sets renderer context

let dt = 0, pt = 0;
let rays = new Rays();
let player = new Player();

//keylisteners

document.body.addEventListener("keydown", function (e) { player.keystroke(e.keyCode, 1); });
document.body.addEventListener("keyup", function (e) { player.keystroke(e.keyCode, 0); });

function mainLoop(timestamp){

    dt = timestamp - pt;
    pt = timestamp;

    if(dt){

        ctx.fillStyle = "#888888";
        ctx.fillRect(0,0,canvas.width, canvas.height);

        player.update(dt);

        rays.update(player.heading, {x: player.pos.x, y: player.pos.y});
        rays.draw(ctx);

    }

    requestAnimationFrame(mainLoop);
}

mainLoop();