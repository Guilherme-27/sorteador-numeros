let numerosSorteados = [];

function sortear() {
    // Variáveis = valores colocados pelo usuário
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let numeroMinimo = document.getElementById('de').value;
    let numeroMaximo = document.getElementById('ate').value;
    // Loop para sortear os números e colocar na lista numerosSorteados
    for (let index = 0; index < quantidadeDeNumeros; index++) {
        x = parseInt(Math.random() *numeroMaximo + 1 );
        if (x >= numeroMinimo) {
            numerosSorteados.push(x);
        }
    }
    textoNaTela(`Números sorteados: ${numerosSorteados}`);
}

function textoNaTela(texto){
    let texto_final = document.getElementById('resultado');
    texto_final.innerHTML = texto;
}

function reiniciar(){

}