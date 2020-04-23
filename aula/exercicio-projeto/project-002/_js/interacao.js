function verificar(){
    var data = new Date();/* Armaze a caracteristica de data e hora do sistema */
    var ano = data.getFullYear();/* Obtem somente o ano completo da data */
    var fano = document.getElementById('txtano');;//Objeto que armazena a caracteristica de manipulação da tag com o id 'txtano'
    var res = document.querySelector('div#res');//Objeto que armazena a caracteristica de manipulação da tag <div> de id 'res'


    if (fano.value.length == 0 || fano.value > ano) {/* verifica se o ano de nascimento eé válido */
        window.alert("Verifique os dados e tente novamente!");// Abri uma mini janela de alerta com a string passada
    } else {//condição para quando o ano de nascimento é valido
        var fsex = document.getElementsByName('radsex');//Objeto que recebe a caracteristica para manipulação da tag de parametro nome 'radsex'
        var idade = ano - Number(fano.value);//recebe a idade ( ano atual - ano de nascimento )
        var genero = "";// criação da variavel que armazena o gênero
        var img = document.createElement('img');//Cria o elemento de tag <img> no documento HTML
        img.setAttribute('id' , 'foto');// Faz a cofiguração de parametro de idetificado e seu nome
        
        if (fsex[0].checked) {/* verifica se a caixa de seleção de rotulo homem está marcada */
            genero = "Homem"; // recebe  o valor de string "homem"
            if (idade >= 0 && idade < 10) {/* verifica a idade para criança*/
                //Criança
                img.setAttribute('src' , '_imagem/crianca_menino.png'); // Faz a confiuração de parametro src com o caminho '_imagem/crianca_menino.png'
            } else if (idade >= 10 && idade < 21) {/* verifica a idade para homem jovem */
                //Jovem
                img.setAttribute('src' , '_imagem/homen_jovem.png');/* adiciona a imagem para idade jovem */
            } else if (idade >= 21 && idade < 50) { /* verifica a idade para homem adulto */
                //Adulto
                img.setAttribute('src' , '_imagem/homen_adulto.png');/* adiciona a imagem para idade adulto */
            } else {/* verifica a idade para idoso */
                //Idoso
                img.setAttribute('src' , '_imagem/homen_idoso.png');/* adiciona a imagem para idade adulto */
            }
        } else if(fsex[1].checked){/* verifica se a caixa de seleção de rotulo mulher está marcada */
            genero = "Mulher";// recebe  o valor de string "Mulher"
            if (idade >= 0 && idade < 10) {/* verifica a idade para criança*/
                //Criança
                img.setAttribute('src' , '_imagem/crianca_menina.png');/* adiciona a imagem para idade de uma criança */
            } else if (idade >=10 && idade < 18) {/* verifica a idade para homem jovem */
                //Jovem
                img.setAttribute('src' , '_imagem/mulher_jovem.png');/* adiciona a imagem para idade jovem */
            } else if (idade >= 18 && idade < 50) {/* verifica a idade para homem adulto */
                //Adulto
                img.setAttribute('src' , '_imagem/mulher_adulta.png');/* adiciona a imagem para idade adulta */
            } else {/* verifica a idade para homem idoso */
                //Idoso
                img.setAttribute('src' , '_imagem/mulher_idosa.png');/* adiciona a imagem para idade idosa */
            }
        }
        res.style.textAlign = "center";/* A tag de divisão para a respota é configurada para o estilo de alinhamento de itens para o centro */
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos.</p>`;// Adiciona no documento HTML na regiao da <div> de id 'res'
        res.appendChild(img);/* appendChild(), um método, adiciona um novo elemento ao DOM, portanto é uma ação sendo executada com a clara intenção de expandir o DOM criando um filho para um elemento já existente, não importa o que está adicionando, mas precisa ser um elemento válido. Quando fizer isto, dependendo do que for colocado poderá mudar a forma de visualização do documento.*/
    }
}