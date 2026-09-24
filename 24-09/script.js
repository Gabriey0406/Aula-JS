// let frutas = ["banana", "maçã", "pera"];
// console.log(frutas);
// console.log(frutas [0]);
// console.log(frutas [2]);
// console.log(frutas.length);

// let cidades = ["ubatuba", "paraiba", "salvador", "Sao paulo", "campinas"];
// console.log(cidades);
// cidades [1] = "sao caetano"
// console.log(cidades [1]);
// console.log(cidades.length);

// for (let index = 0; index < 5; index++) {
//   console.log(cidades [index]);
  
    
// }

// let nomes = ["Levi", "DUDA","Gustavo", "Bernardo", "Yasmin", "Gaby"];
// for (let index = 0; index < 6; index++) {
//    console.log(nomes [index]);
   
    
// }

// let preços = [7, 5, 90, 50, 40];
// for (let index = 0; index < 5; index++) {
//     console.log(preços [index]);
    
    
// }

// let produtos = ["pão de mel", "salgadinho", "Refri", "bolo", "diabo verde"]
// let valores = [10, 23, 25, 41, 63];
// for (let index = 0; index < produtos.length; index++) {
//     console.log(valores [index] , produtos[index]);
    
    
// }
// let numeros = [583,58,52,01,5,825,5,6,9,7]
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index]>= 10) {
//         console.log(numeros[index]);
        
//     }
// }
// let numeros = [583,58,52,01,5,825,5,6,9,7]
// for (let index = 0; index < numeros.length; index++) {
//    let sobra = numeros[index] % 2;
//     if (sobra == 0) {
//     console.log("O numero " + numeros[index] + " par");
    
//    } else {
//     console.log("O numero " + numeros[index] + " ímpar");

//    }
// }

let notas = [7, 3, 5, 9, 10, 8, 7, 4];

for (let index = 0; index < notas.length; index++) {
    if (notas[index] >= 7) {
    console.log("Aluno aprovado " + notas[index]);
    
   } else {
    console.log("Aluno reprovado " + notas[index]);
    
   }
    
}

let temperatura = [5, 16, 24, 30, 14, 18, 21]

for (let index = 0; index < temperatura.length; index++) {
    if (temperatura[index]>=30) {
        console.log("Está calor!");
        
    }else if  (temperatura[index]>= 20 && temperatura[index] <= 30){
        console.log("Agradavel!");
    
        
}
    else {
        console.log("Está frio!");
        

    }
}