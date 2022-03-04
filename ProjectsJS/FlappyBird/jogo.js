import { flappyBird, chao, planoDeFundo } from './components.js';

console.log('[DevSoutinho] Flappy Bird');


function loop() {
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha()

    flappyBird.y = flappyBird.y + 1;
    if (flappyBird.y == 500) {
        flappyBird.y = 0;
    }


    requestAnimationFrame(loop); //FPS - FRAMES PER SECONDS
}

loop()