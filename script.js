const change = document.getElementById("body");

function red() {
  change.style.backgroundColor = "red";
}

function blue() {
  change.style.backgroundColor = "mediumblue";
}

function green() {
  change.style.backgroundColor = "green";
}

function yellow() {
  change.style.backgroundColor = "yellow";
}

function pink() {
  change.style.backgroundColor = "pink";
}

function purple() {
  change.style.backgroundColor = "purple";
}

function gray() {
  change.style.backgroundColor = "gray";
}

function aqua() {
  change.style.backgroundColor = "aqua";
}

function orange() {
  change.style.backgroundColor = "orange";
}

function white() {
  change.style.backgroundColor = "white";
}

document.getElementById("red").addEventListener("click", red);
document.getElementById("blue").addEventListener("click", blue);
document.getElementById("green").addEventListener("click", green);
document.getElementById("yellow").addEventListener("click", yellow);
document.getElementById("pink").addEventListener("click", pink);
document.getElementById("purple").addEventListener("click", purple);
document.getElementById("gray").addEventListener("click", gray);
document.getElementById("aqua").addEventListener("click", aqua);
document.getElementById("orange").addEventListener("click", orange);
document.getElementById("white").addEventListener("click", white);
