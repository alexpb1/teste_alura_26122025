let listaNumerosSorteados = [];
let numMaxQuePodeSerSorteado = 100;
let tentativas=0;
let numeroSecreto = gerarNumeroAleatorio();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numMaxQuePodeSerSorteado}.`);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function verificarChute() {
    tentativas++;
        let chute = document.querySelector('input').value;
        limparInput();
        if (chute == numeroSecreto&& tentativas<=5) {
            exibirTextoNaTela('h1', 'Você acertou!');
            exibirTextoNaTela('p', 'O número secreto era ' + numeroSecreto);
            fimDeJogo();
        } else {
            if(tentativas<5){
                if (chute < numeroSecreto) {
                    exibirTextoNaTela('h1', 'Você errou!');
                    exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
                } else {
                    exibirTextoNaTela('h1', 'Você errou!'); 
                    exibirTextoNaTela('p', 'O número secreto é menor que ' + chute); 
                  }
            } else{
            exibirTextoNaTela('h1', 'Suas tentativas acabaram!');
            exibirTextoNaTela('p', 'O número secreto era ' + numeroSecreto);
            fimDeJogo();
            }
        } 
      }

function gerarNumeroAleatorio() {
    if (listaNumerosSorteados.length == numMaxQuePodeSerSorteado) {
        listaNumerosSorteados = [];
    }
    numeroAleatorio = parseInt(Math.random() * numMaxQuePodeSerSorteado + 1);
    console.log(listaNumerosSorteados);
    while (listaNumerosSorteados.includes(numeroAleatorio)==false) {
        numeroAleatorio = parseInt(Math.random() * numMaxQuePodeSerSorteado + 1);
        listaNumerosSorteados.push(numeroAleatorio);
     console.log(numeroAleatorio);
    }
   
    return numeroAleatorio;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numMaxQuePodeSerSorteado}.`);
    habilitarBotaoChutar();
    desabilitarBotaoReiniciar();
    limparInput();
    mostraInput();
    listaNumerosSorteados = [];
}

function habilitarBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.disabled = false;
}

function desabilitarBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.disabled = true;
}


function limparInput() {
    let campoInput = document.querySelector('input');
    campoInput.value = '';
}

function desabilitarBotaoChutar() {
    let botaoChutar = document.getElementById('botaoChutar');
    botaoChutar.disabled = true;
}

function habilitarBotaoChutar() {
    let botaoChutar = document.getElementById('botaoChutar');
    botaoChutar.disabled = false;
}

function fimDeJogo() {
    desabilitarBotaoChutar();
    habilitarBotaoReiniciar();
    let campoInput = document.querySelector('input');
    escondeInput();
}

function escondeInput() {
    let campoInput = document.querySelector('input').style.display='none';
    // campoInput.display = 'none';
}

function mostraInput() {
    let campoInput = document.querySelector('input').style.display='block';
    // campoInput.display = 'none';
}

// function calculaIMC() {
//     let peso = prompt("Digite seu peso em kg:");
//     let altura = prompt("Digite sua altura em metros:");
//     let imc = peso / (altura * altura);
//     imc = imc.toFixed(2);
//     alert("Seu IMC é: " + imc);
// }

// function calculaFatorial(n) {
//    n=prompt("Digite um número para calcular o fatorial:");
//    numero=n
//    let a= n;
//    while(a>1){
//         a--;
//         n=n*a;
//         //alert(n);
//    }
//    alert(`O fatorial de ${numero} é ${n}.`);
// }

// function dolarParaReal() {
//     let umDolar = 4.80;   
//     dolar=prompt("Digite o valor em Dólar que deseja converter para Real:");
//     let real = dolar * umDolar;
//     real = real.toFixed(2);
//     alert("O valor em Real é: R$ " + real);
// }

// function area_Perimetro(){
//     let largura =prompt("Digite a largura do retângulo:");
//     let comprimento=prompt("Digite o comprimento do retângulo:");
//     area= largura * comprimento;
//     perimetro= 2*(largura + comprimento);
//     alert(`A área é ${area} e o perímetro é ${perimetro}.`);    
// }

// function areaCircular(raio){
//     area= 3.14 * (raio * raio);
//     alert(`A área do círculo é ${area}.`);
// }

// function tatuada(numero){
//     let texto="";
//     n=1;
//     while(n<=10){
//         texto+= `${numero} x ${n} = ${numero*n}\n`;
//         n++;
//         }
    
//     alert(texto);
// }
