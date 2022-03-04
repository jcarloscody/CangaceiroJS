export const sprites = new Image();
sprites.src = './sprites.png';

export const canvas = document.querySelector('canvas');
export const contexto = canvas.getContext('2d');

export const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y  //sprite x , y ponto inicial para o corte na imagem
            flappyBird.largura, flappyBird.altura, // //tamanho do recorte na sprite  width, height
            flappyBird.x, flappyBird.y,//local onde aparecerá no canvas  x,y
            flappyBird.largura, flappyBird.altura, //tamanho do local no canvas
        );
    }
}


export const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce';  //vai pintar o canvas desde o canto 0,0 ate´ sua área completa cor azul
        contexto.fillRect(0, 0, canvas.width, canvas.height)//x,y inicial, x,y final


        contexto.drawImage(
            sprites, //imagem
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );

        contexto.drawImage(  //redesenha para complementar
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );
    },
};




export const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112, //pega a altura total do canvas e subtrai
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );

        contexto.drawImage( //aqui estamos redesenhando a imagem para complementar o espaço
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
        );
    },
};

