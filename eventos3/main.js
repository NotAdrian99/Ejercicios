function calcularIMC() {
  let pesoInput = document.getElementById("peso");
  let alturaInput = document.getElementById("altura");
  let imcInput = document.getElementById("IMC");
  let peso = parseFloat(pesoInput.value);
  let altura = parseFloat(alturaInput.value) / 100;
  let imc = peso / (altura * altura);
  imcInput.value = imc.toFixed(2);
}
