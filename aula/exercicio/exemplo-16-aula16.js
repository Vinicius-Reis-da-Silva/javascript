//FUNÇÃO TRADICIONAL
/*
function parimpar(n){
    if(n%2 == 0){
        return 'Par!' ;
    }else{
        return 'Impar!';
    }
}

let resul = parimpar(0.2);
console.log(`O valor é ${resul}`);
*/

//FUNÇÃO COM PARAMETRO PRÉ-DEFININDOS OPCIONAIS 
function soma(n1=0 , n2=0){
    return n1+n2;
}

console.log(soma(6,4));

//VARIAVEL RECEBE UMA FUNÇÃO
var valor = function(x){
    return x*2;
}

console.log(valor(8));
