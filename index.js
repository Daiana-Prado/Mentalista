
var numero = parseInt(Math.random() * 11)
function Chutar() {
    var Resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    if (chute == numero) {
    Resultado.innerHTML = "Vovê acertou!"
    }else if (chute > 10 || chute < 0) {
    Resultado.innerHTML = "Você deve escolher um numero de 0 a 10" 
    }else  {
    Resultado.innerHTML = "Errou!" 
    }
    

}