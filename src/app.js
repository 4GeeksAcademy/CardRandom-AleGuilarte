import "bootstrap";
import "./style.css";

let carta = ["♥", "♦", "♣", "♠"]
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function cardRandom() {
  let muestraCarta = carta [Random(carta.length)];
  let muestraNumero = numero [Random(numero.length)];
      const elemento = document.querySelector("#signo")
      const elemento2 = document.querySelector("#signo2")
  let lacarta = `${muestraCarta}`;
  let elnumero = `${muestraNumero}`;
  document.querySelector("#signo").innerHTML = lacarta;
  document.querySelector("#valor").innerHTML = elnumero;
  document.querySelector("#signo2").innerHTML = lacarta;

  if (muestraCarta === "♥" || muestraCarta === "♦"){
    [elemento, elemento2].forEach(el => el.style.color = "red")
  } else {
    [elemento, elemento2].forEach(el => el.style.color = "black")
  }
}

function Random (nun) {
  return Math.floor(Math.random() * nun)
}

const boton = document.querySelector("#btn")
boton.addEventListener("click", cardRandom)

window.onload = cardRandom