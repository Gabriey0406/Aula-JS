// operadores aritimeticos
// + soma
// - subtração
// * mutiplicação
// / divisão
// % sobra da divisão
// > maior que
// < menor que
// == igual
// >= maior ou igual
// <= menor ou igual
// != é diferente
// ! operador NOT "inverte"

// let n1 = 3;
// let n2 = 9;

// console.log(n1 + n2);
// console.log(n2 - n1);
// console.log(n1 * n2);
// console.log(n2 / n1);
// console.log(n2 % n1);
// console.log((n2 - n1) * 2);
// console.log("palavra" + n1);

// Crie 3 variaveis, cada uma contendo um numero;
// some as 3 e tire a media, exiba o resultado no console;

// let n3 = 100;
// let n4 = 200;
// let n5 = 300;
// let n6 = 400;
// let n7 = 500;

// console.log(n3 + n4);
// console.log(n6 - n5);
// console.log(n7 * n3);
// console.log((n3 + n4 + n5 + n6 + n7) / 5);
// console.log("A média de " +n3+ " + " +n4+ " + " +n5+ " + " +n6+ " + " +n7+ " é 300");

// let idade = 18;

// // console.log(idade > 18);
// // console.log(idade < 18);
// // console.log(idade == 18);
// // console.log(idade >= 18);
// // console.log(idade <= 18);
// // console.log(idade != 18);
// console.log(idade === "18");// comparaçaõ de tipo de variavel

// let idade = 18;
// let habilitado = true;
// console.log(idade <= 18 && habilitado == true);
// V && V = V
// V && F = F
// F && V = F
// F && F = F
// console.log(idade <=18 || habilitado == true);
// V || V = V
// V || F = V
// F || V = V
// F || F = F
// console.log(!habilitado);

// let habilitado = false;
// //se idade for igual a 18
//    //Faça isso

// // Se não
//    //Faça isso
// if (habilitado == true) {// se sim
//     console.log("Pode dirigir");
// } else {// se não
//     console.log("NÂO pode dirigir");
    
// }

// let idade = 23;
// if (idade >= 18) {// Se sim
//     console.log("Já pode ser preso");
    
// } else {// Se não
// console.log("NÂO pode ser preso, ainda");
    
// }
//Crie um sistema que compare o valor de uma variavel
//senha SE for igual a 1234 escreva no console
// "acesso liberado" SE NÂO escreva "acesso bloqueado"

let senha = 1703;

if (senha == 1234) {// se sim
    console.log("acesso liberado");
    
} else {//se NÃO
    console.log("acesso bloqueado");
    
}

//Crie um sistema que avalie uma variavelnota
// Se nota for maior que 6 escreva aprovado, SE NÃO
// escreva reprovado

let nota = 9;

if (nota >= 6) {//se sim
    console.log("aprovado");
    
} else {//SE NÃO
    console.log("reprovado");
    
}

//crie um sistema que compara um valor total de uma
//compra, SE o valor for maior que 500 calcule um
//desconto de 20 e mostre o valor total da compra 
//com desconto SE NÃO mostre a mensagem 
//COMPRA SEM DESCONTO

let valor = 600;

if (valor >= 500) {//se sim
    console.log(valor - 20 );
    
    
} else {//SE NÃO
    console.log("compra sem desconto");
    
    
}