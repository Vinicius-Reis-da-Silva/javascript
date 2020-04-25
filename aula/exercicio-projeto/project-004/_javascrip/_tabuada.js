function tabuada(){
    var valor = window.document.getElementById('txtnum');
    var resp = window.document.querySelector('select#resp');
    var msg = "";
    

    if(valor.value.length == 0){
        window.alert("[ERRO] : valor não informado");
    }else{
        /*
        valor = Number(valor.value);
        for(var i=1 ; i<=10 ; i++){
            msg += `${valor} X ${i} = ${i*valor}`;
            msg += "<br>";
        }
        resp.innerHTML = `<p>${msg}</p>`;
        */
       var n = Number(valor.value);
       resp.innerHTML = "";
       for(let i=1 ; i<=10 ; i++){
           var item = document.createElement('option');
           item.text = `${n} x ${i} = ${n*i}`;
           item.value = `resp${i}`;
           resp.appendChild(item);
       }
    }
    

    
}