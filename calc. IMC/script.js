const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const nomeResultado = document.getElementById("nomeresultado")
const pesoResultado = document.getElementById("pesoresultado")
const alturaResultado = document.getElementById("alturaresultado")
const boxResultado = document.getElementById("resultado")

formulario,addEventListener("submit", function(event){
    event.preventDefault();

     const valornome = nome.value
     const valorpeso = peso.value
     const valoraltura = altura.value
})