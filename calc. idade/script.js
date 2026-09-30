//Pegar os elementos no html

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado");
const dataResultado = document.getElementById("dataResultado");
const idadeResultado = document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado")

formulario,addEventListener("submit", function(event){
    event.preventDefault();

    //Pegar o valor dos inputs
    const valornome = nome.value;
    const valorNascimento = nascimento.value;

    // console.log(valornome);
    // console.log(valorNascimento);   
    
    // Separa a data em tres valores
    const dataseparada = valorNascimento.split("-");

    // console.log(dataseparada);

    const anonascimento = Number(dataseparada[0])
    const mesnascimento = Number(dataseparada[1])
    const dianascimento = Number(dataseparada[2])

    // console.log(anonascimento);
    

    const hoje = new Date()

    const anoatual = hoje.getFullYear()
    const mesatual = hoje.getMonth()+1
    const diaatual = hoje.getDate()
    // console.log(hoje);
    // console.log(anoatual);
    // console.log(mesatual);
    // console.log(diaatual);

    
    let idade = anoatual - anonascimento
//    console.log(idade);

    if (mesnascimento > mesatual) {
        idade = idade - 1
    }
    
    
    if (dianascimento > diaatual && mesnascimento == mesatual ) {
        idade = idade - 1
    }
    
    // console.log(idade);

    const dataformatada = dianascimento + "/" + mesnascimento + "/" + anonascimento
 
    nomeResultado.textContent = valornome; 
    dataResultado.textContent = dataformatada;
    idadeResultado.textContent = idade;
    
    boxResultado.style.display = "block"




})
