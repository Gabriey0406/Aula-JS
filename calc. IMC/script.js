const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const nomeResultado = document.getElementById("nomeResultado")
const pesoResultado = document.getElementById("pesoResultado")
const alturaResultado = document.getElementById("alturaResultado")
const boxResultado = document.getElementById("resultado")
const classificacao1 = document.getElementById("classificacao")
const imc = document.getElementById("imcResultado")

formulario,addEventListener("submit", function(event){
    event.preventDefault();

     const valornome = nome.value
     const valorpeso = peso.value
     const valoraltura = altura.value

    //  console.log(valornome);
    // console.log(valorpeso);
    // console.log(valoraltura);
    
    const pesovalor = Number(valorpeso);
    const alturavalor = Number(valoraltura);
    console.log(pesovalor);
    console.log(alturavalor);
    
    let IMC = valoraltura * valoraltura
    let IMC1 = valorpeso/(IMC)
   let classificacao = ""
    if (IMC1 < 18.5) {
       classificacao = "ABAIXO DO PESO!";
    
    }else if (IMC1 >= 18.5 && IMC1 <= 24.9) {
          classificacao = "PESO NORMAL(SAUDAVEL)!" ;
         
        

    }else if (IMC1 >= 25.0 && IMC1 <= 29.9) {
        classificacao = "SOBREPESO";
        
            
    }
    else if (IMC1 >= 30.0 && IMC1 <= 34.9) {
        classificacao = "OBESIDADE GRAU 1!";
        
    }
    else if (IMC1 >= 35.0 && IMC1 <= 39.9) {
        classificacao = "OBESIDADE GRAU 2!";
        
    }
    else {
        classificacao = "OBESIDADE GRAU 3!";
        
    }

    nomeResultado.textContent = valornome
    pesoResultado.textContent = valorpeso
    alturaResultado.textContent = valoraltura
    imc.textContent = IMC1.toFixed(2)
    classificacao1.textContent = classificacao
    boxResultado.style.display = "block"

})