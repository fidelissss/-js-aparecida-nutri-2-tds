var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
paciente.querySelector("info-peso");
vartdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector("info-imc");

var peso = tdPeso.textContent;


console.log(paciente);//tr

var imc = peso / (altura * altura);//100/2.0=100 / 4  =>>>>> 25
tdImc.textContent = imc.toFixed(2);




console.log(tdPeso);// td que tem o peso
console.log(peso);// Obter 100

if (peso < 0 || peso >= 1000) {
    console.log("erro,peso invalido!");
}
if (altura < 0 || altura >= 3) {
    console.log("erro,altura invalida!");
}