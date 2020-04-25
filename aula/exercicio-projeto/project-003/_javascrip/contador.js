
var resp = window.document.getElementById('resp');//objeto para manipula os dados de resposta no HTML

/* FUNÇÃO PARA CONTAR */
function contar(){

    /* OBJETOS PARA OS INPUT DA PÁGINA HTML */
    var f_inicio = window.document.querySelector('input#txtInicio');
    var f_fim = window.document.getElementById('txtFim');
    var f_passo = window.document.getElementById('txtPasso');

    /* VÁRIAVEL PARA ARMAZENA OS DADOS TRANSFOMADO DO INPUT */
    var inicio = Number(f_inicio.value);
    var fim = Number(f_fim.value);
    var passo = Number(f_passo.value);

    if(f_passo.value == "" || passo==0){/* condição para contagem de passo vazio ou passo == 0 */
        passo=1;
    }
    if (f_inicio.value=="" || f_fim.value=="") {//verifica se a entradas de dados foram preenchidas
        resp.innerText = "";
        window.alert('Campo(s) de dados Vázio(s)');//Abrir uma janela de alerta com os mensagem informada
    }else if(fim>=inicio){/* verifica se o fim e maior que inicio */
        if(passo>0){/* verifica se posso e positivo para contagem crescente */
            cres(inicio , fim , passo);
        }else {/* caso contrario o passo é negetivo então a contagem é decrescente*/
            desc(fim , inicio , passo*(-1));
        }     
    }else{/* caso contrario o inicio é maior que o final então a contagem é decrescente */
       passo = Math.abs(passo);// valor absoluto da variavel passo
       desc(inicio , fim , passo);
    }

    
}

/* FUNÇÃO P/ CONTAGEM CRESCENTE */
function cres(inicio , fim , pas){
    var msg = "";
    for (var cont=inicio ; cont <= fim ; cont+=pas) {
        msg += cont.toString();
        msg +=' &#x1F449 ';
    }
    msg += "&#x1F3C1";
    resp.innerHTML = `<p>Contando: <br>${msg}</p>`;//adiciona ao documento HTML na área da tag div de id 'resp'
}

/* FUNÇÃO P/ CONTAGEM DECRESCENTE */
function desc(inicio , fim , pas){
    let msg = "";
    for (var cont=inicio ; cont >= fim ; cont-=pas) {
        msg += cont.toString();
        msg +=' &#x1F449 ';
    }
    resp.innerHTML = `<p>Contando: <br>${msg} \u{1F3C1}</p>`;;//adiciona ao documento HTML na área da tag div de id 'resp'
}