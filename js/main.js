function sumar() {
    let numUno = document.getElementById('num1').value;
    let numDos = document.getElementById('num2').value;
    let resultado = parseInt(numUno) + parseInt(numDos);
    document.getElementById('resultadoSuma').innerText = resultado;
}