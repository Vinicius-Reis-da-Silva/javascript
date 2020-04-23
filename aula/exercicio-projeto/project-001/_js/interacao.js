/* FUNÇÃO PARA MUDA O FUNDO , ACIONA UM PARAGRAFO QUE INFORMA A HORAS , E MUDA A FOTO */ 
function carregar(){
    var hora = window.document.querySelector('div#msg');//Objeto que armazena a caracteristica de manipulação da tag <div> de id 'msg'
    var foto = window.document.querySelector('img#imagem');//Objeto que armazena a caracteristica de manipulação da tag <img> de id 'imagem'
    var data = new Date();/* Armaze a caracteristica de data e hora do sistema */
    var agora = data.getHours(); /* Obtem somente as horas do sistema */
    var fundo = window.document.getElementById('interface');//Objeto que armazena a caracteristica de manipulação da tag com o id 'interface'

    /* condição para as horas */
    if(agora>=6 && agora<12){ // verifica se o horarie é de manhão
        hora.innerHTML = `<p>Agora são ${agora} horas<p>`;// Adiciona no documento HTML na regiao da <div> de id 'msg'
        foto.src = "_imagem/Amanhece.png";// Adiciona a imagem contida nesse caminho para tag <img>
        fundo.style.backgroundColor = "#fed198";// Na tag de id 'interface' formato o estilo de cor de fundo
    }else if(agora>=12 && agora<=18){ // verifica se o horarie é de tarde
        hora.innerHTML = `<p>Agora são ${agora} horas</p>`;// Adiciona no documento HTML na regiao da <div> de id 'msg'
        foto.src = "_imagem/Entardece.png";// Adiciona a imagem contida nesse caminho para tag <img>
        fundo.style.backgroundColor = "#f33c0a";// Na tag de id 'interface' formato o estilo de cor de fundo
    }else { // verifica se o horarie é de noite
        hora.innerHTML = `<p>Agora são ${agora} horas</p>`;// Adiciona no documento HTML na regiao da <div> de id 'msg'
        foto.src = "_imagem/Anoitece.png";// Adiciona a imagem contida nesse caminho para tag <img>
        fundo.style.backgroundColor = "#203144";// Na tag de id 'interface' formato o estilo de cor de fundo
    }
}

