let square = document.getElementById("box");
let button = document.querySelector("button");
let colors = ["gray", "skyblue", "red"];
let currentColorIndex = 0;

function changeColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  square.style.backgroundColor = colors[currentColorIndex];
  square.textContent = colors[currentColorIndex];
}
