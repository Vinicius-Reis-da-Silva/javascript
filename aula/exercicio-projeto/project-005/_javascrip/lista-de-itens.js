var lista = [];
var resp = window.document.getElementById('resp');

//FUNÇÃO QUE REALIZA A SOMA DO VALORES DA LISTA DE NÚMEROS
//USA O RECURSO DE OBJETO RECEBE UMA FUNÇÃO
var soma = function(x){
    var resul=0;//váriavel da soma 
    //Percore todos o valores da lista e soma à váriavel
    for(let pos in x){
        resul += x[pos];
    }
    return resul;//retorna a soma do valores
}

//FUNÇÃO QUE RETORNA A MÉDIA DO VALORES DA LISTA
var media = function(x){
    return soma(x)/x.length;
}

//FUNÇÃO PARA VERIFICA SEO VALOR JÁ EXISTE NA LISTA
function existe(list , valor){
    if(list.indexOf(valor) != -1){//condição para quando existe
        return true;
    }else{//condição para quando nçao existe
        return false;
    }
}

//FUNÇÃO PARA ADICIONA UM VALOR A LISTA DA NÚMEROS
function adiciona(){
      
    var txtNum = window.document.getElementById('txtNum');
    
    if(txtNum.value.length == 0){//Condição para quando não digita um número e clica em adiciona
        window.alert('Por favo informe um valor \u{1F622}');
    }else {//condição para um valor foi iserido e clicou em adiciona
        var valor = Number(txtNum.value);//Transforma os dados do input em numero
        txtNum.value = "";//limpa o valor digitado no input
        resp.innerHTML = "";//limpa o dados da área de resposta
        if(valor<1 || valor>100){//condição para valor não valido 
            window.alert("[ERRO] \u{1F41B} Valor não é valido!");      
        }else if(existe(lista , valor)){//Condição para verifica se o valor já existe na lista
            window.alert("Seu Valor já existe \u{1F622}");
        }else{//condição para iserir um valor na lista
            lista.push(valor);
            telaSel(lista);
        }
       
    }
    
}

//FUNÇÃO PARA EXIBIR A A LISTA DE NÚMEROS NO <select>
function telaSel(lista){
    var listSel = window.document.querySelector('select#numSel');//Objeto para manipula a <select>
    listSel.innerHTML = "";//Limpa os dados contido dentro da tag <select>
    for(let pos in lista){
        var item = document.createElement('option');//Cria um componete de seleção
        item.innerText = `Valor ${lista[pos]} adicionado`; // Escreve essa mensagem no texto do item criado
        item.value = `listSel${pos}`; // lista de item para usa no php
        listSel.appendChild(item);//A função appendChild() insere um elemento filho (children) ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM
    }
}

//FUNÇÃO PARA MOSTRA OS DADOS ADIQUIRIDOS APARTIR DA LISTA DE NÚMEROS
function exibir(){   
    if(lista.length == 0){
        window.alert('[ERRO] \u{1F41B} Lista Vázia!');
    }else{
        resp.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>` +
         `<p>O maior valor informado foi ${Math.max.apply(null,lista)}</p>` + 
         `<p>O menor valor informado foi ${Math.min.apply(null,lista)}</p>` + 
         `<p>Somando todos os valores temos ${soma(lista)}</p>` + 
         `<p>A média dos valores digitados é ${media(lista)}</p>`;
       
    }
}