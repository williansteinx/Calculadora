function inserir(num) { /* Função para inserir os números na calculadora */
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = numero + num; 
}

function clean() { /* Função para limpar tudo */
    document.getElementById("resultado").innerHTML = "";
}

function back() { /* Função para apagar um número por vez */
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){ /* Função para efetuar o cálculo do valor inserido */
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerText = "Erro";
    }
}