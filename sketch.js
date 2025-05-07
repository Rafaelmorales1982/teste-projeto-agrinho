//Prepara o ambiente
function setup(){
  //Cria tela
  createCanvas(400, 400);
}

/* Criando variáveis para movimentar os personagens colocando os valores na posição do (x) */

let xjogador1 = 0;
let xjogador2 = 0;

/* desenha na tela */
function draw() {
  if(focused == true){//serve para selecionar a tela 
    background('green');
  }else {
    background('red');
  }
  
  
  /* Aumentando tamanho do Emoji */
  textSize(30);
  
  /*Cria texto depois posição X e Y */
  text("💀", xjogador1, 100);
  text("😂", xjogador2, 300);
  
  /* Retângulo x, y, largura e altura*/
  rect(370, 0, 10,400);
  
  /* criar um código para aumentar o valor de (x) dos Emojis para  se movimentarem para a direita */
  
  /* Incrementar os valores dos jogadores (emojis) de um em um */
  
 
  
  /* Se o jogador1 posição x maior ele vence e jogador2 também*/
 if (xjogador1 >= 370 && xjogador2 >= 370) {
    // Ambos chegaram ao mesmo tempo
     //posição x=50 e y=200
   //text mostra o texto
    text("Jogadores Empataram!!", 50, 200);
    noLoop(); // Para o jogo
} else if (xjogador1 >= 370) {
    // Jogador 1 venceu
    //posição x=50 e y=200
  
    text("Jogador1 Venceu!!", 50, 200);
    noLoop(); // Para o jogo
} else if (xjogador2 >= 370) {
    // Jogador 2 venceu
  //posição x=50 e y=200
  
    text("Jogador2 Venceu!!", 50, 200);
    noLoop(); // Para o jogo
}

}

/* Criando função fora do Draw ao clicar "a" ou "d" faz os nossos personagens se mover */

function keyReleased() {
  if (key == 'a') {
   
    xjogador1 = xjogador1 + random(10);
   
  }
  if (key == 'd'){
    
  xjogador2 = xjogador2 + random(10);
  }
}