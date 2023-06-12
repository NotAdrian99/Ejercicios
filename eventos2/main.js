function clearSquare() {
  document.getElementById("box").textContent = "";
  document.getElementById("textInput").value = "";
}

document.getElementById("textInput").addEventListener("input", function () {
  let text = document.getElementById("textInput").value;
  document.getElementById("box").textContent = text;
});
