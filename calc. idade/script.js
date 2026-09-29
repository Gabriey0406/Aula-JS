//Pegar os elementos no html

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

formulario,addEventListener("submit", function(event){
    event.preventDefault();

    //Pegar o valor dos inputs
    const valornome = nome.value;
    const valorNascimento = nascimento.value;

    // console.log(valornome);
    // console.log(valorNascimento);   
    
    // Separa a data em tres valores
    const dataseparada = valorNascimento.split("-");

    console.log(dataseparada);
    
})