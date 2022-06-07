//nome
var nome = prompt("Informe seu nome: "); //entrada de dados

//onde inicia o jogador 
var jogador_px = 300;
var jogador_py = 300;
var pontos = 0;


function load() {
    document.addEventListener("keydown", tecla);
}

function novaMoeda() {
    var nMoeda = document.getElementById("moeda");
    // função para posição aleatoria
    nMoeda.style.top = (Math.floor(Math.random() * 40) * 10 + 100) + "px";
    nMoeda.style.left = (Math.floor(Math.random() * 50) * 10 + 10) + "px";
}

function mudarMoeda () {
    document.getElementById("imagem").src = "images/dinheiro.png";
}

// function novaFase() { //função para posição aleatoria nova moeda
//     var nDinheiro = document.getElementById("dinheiro");
//     nDinheiro.style.top = (Math.floor(Math.random() * 40) * 10 + 100) + "px";
//     nDinheiro.style.left = (Math.floor(Math.random() * 50) * 10 + 10) + "px";
//   }

function tecla() {
    var jg = document.getElementById("jogador");
    var moeda_pos = document.getElementById("moeda").getBoundingClientRect();
    // var dinheiro_pos = document.getElementById("dinheiro").getBoundingClientRect();

    var tecla = event.keyCode;

    //JOGADOR
    if (tecla == 37 && jogador_px > 10) {
        //Esquerda
        jogador_px -= 10;
        document.getElementById("pato").src = "images/patinhas_Esq.png"
        jg.style.left = jogador_px + "px";
    }

    if (tecla == 39 && jogador_px < 600) {
        //Direita
        jogador_px += 10;
        document.getElementById("pato").src = "images/patinhas_Dir.png";
        jg.style.left = jogador_px + "px";
    }
    if (tecla == 38 && jogador_py > 50) {
        //Cima
        jogador_py -= 10;
        document.getElementById("pato").src = "images/patinhas_Cima.png";
        jg.style.top = jogador_py + "px";
        76;
    }

    if (tecla == 40 && jogador_py < 600) {
        //baixo
        jogador_py += 10;
        document.getElementById("pato").src = "images/patinhas_Baixo.png";
        jg.style.top = jogador_py + "px";
    }

    //MOEDA
    //Verificando P1
    if (jogador_px >= moeda_pos.x &&
        jogador_px <= moeda_pos.x + 50 &&
        jogador_py >= moeda_pos.y &&
        jogador_py <= moeda_pos.y + 50) {
        pontos++;
        novaMoeda();
    }

    //Verificando P2
    if (jogador_px + 50 >= moeda_pos.x &&
        jogador_px + 50 <= moeda_pos.x + 50 &&
        jogador_py >= moeda_pos.y &&
        jogador_py <= moeda_pos.y + 50) {
        pontos++;
        novaMoeda();
    }

    //Verificando P3
    if (jogador_px >= moeda_pos.x &&
        jogador_px <= moeda_pos.x + 50 &&
        jogador_py + 50 >= moeda_pos.y &&
        jogador_py + 50 <= moeda_pos.y + 50) {
        pontos++;
        novaMoeda();
    }

    //Verificando P4
    if (jogador_px + 50 >= moeda_pos.x &&
        jogador_px + 50 <= moeda_pos.x + 50 &&
        jogador_py + 50 >= moeda_pos.y &&
        jogador_py + 50 <= moeda_pos.y + 50) {
        pontos++;
        novaMoeda();
    }

    if (pontos == 5) {
        mudarMoeda();
    }

      if(pontos<5) {
        document.getElementById("tcl").innerHTML = "Jogador: " + nome + " | Pontos:" + pontos + " | Fase: 1";
      } else {
        document.getElementById("tcl").innerHTML = "Jogador: " + nome + " | Pontos:" + pontos + " | Fase: 2";
      }
}

window.addEventListener("load", load);