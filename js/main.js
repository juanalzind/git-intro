function sumar() {
    let numUno = document.getElementById('num1').value;
    let numDos = document.getElementById('num2').value;
    let resultado = parseInt(numUno) + parseInt(numDos);
    document.getElementById('resultadoSuma').innerText = resultado;
}

function restar() {
    let numUno = document.getElementById('numR1').value;
    let numDos = document.getElementById('numR2').value;
    let resultado = parseInt(numUno) - parseInt(numDos);
    document.getElementById('resultadoResta').innerText = resultado;
}