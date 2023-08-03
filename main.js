const form = document.getElementById("form-validacao");


function validacao(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const minValue = document.getElementById('min').value;
    const maxValue = document.getElementById('max').value;

    const menssageSucess = "Correto! o valor A: " + minValue + " é menor que o valor B: " + maxValue;

    formEValido = validacao(minValue, maxValue)
    if (formEValido) {
        alert(menssageSucess);

    } else if (minValue == maxValue) {
        alert("Deu ruim! :( Os valores são indênticos, não é válido!");

    } else {
        alert("Vacilo! O valor de B é maior que A, não é válido!");
    }
})

console.log(form);