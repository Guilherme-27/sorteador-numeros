function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //Verifica se o numero 'de' é menor que o número 'até'
    if (ate >= de) {
        //Verifica se a quantidade de números a ser sorteado é compatível com o intervalo dos números
        if (quantidade <= (ate-de)+1){
            //Loop para preencher uma lista de números sorteados
        let numerosSorteados = [];
        for (let index = 0; index < quantidade; index++) {
            let numero = obterNumeroAleatorio(de, ate);
            while (numerosSorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            numerosSorteados.push(numero);
        }
    textoResultados(`Números sorteados: ${numerosSorteados}`);
    //Ativa o botão reiniciar
    document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao');
        } else{
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        }
        
    } else {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function textoResultados(texto){
    let elemento = document.getElementById('resultado');
    elemento.innerHTML = texto;
}

function limparCampos() {
    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    let de = document.getElementById('de');
    de.value = '';
    let ate = document.getElementById('ate');
    ate.value = '';
}

function reiniciar(){
    limparCampos();
    //Desativa o botão reiniciar
    document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao-desabilitado');
    textoResultados('Números sorteados:  nenhum até agora');
}