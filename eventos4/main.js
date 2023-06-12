let tasaCambio = 140;

function cambiar() {
  let pesoInput = document.getElementById("peso");
  let resultadoInput = document.getElementById("resultado");

  let peso = parseFloat(pesoInput.value);

  let resultado = peso / tasaCambio;
  resultadoInput.value = resultado.toFixed(2);
}
function mostrarTasaCambio() {
  let precioTasaCambio = document.getElementById("tasaCambio");
  precioTasaCambio.textContent = tasaCambio;
}

mostrarTasaCambio();
