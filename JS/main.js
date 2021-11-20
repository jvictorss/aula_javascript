// var nome = 'João Victor';
// var idade = 28;
// var idade2 = 10;

// alert("Bem-vindo, " + nome);
// alert(nome + " tem " + idade + " anos.")
// alert(idade + idade2);

//console.log("Bem-vindo, " + nome);

//Array
var lista = ["maçã", "pêra", "laranja"];
//Imprime o segundo item do array:
console.log(lista[1]);
//Adicionar item na lista:
lista.push("uva");
console.log(lista);
//Remover último item da lista:
lista.pop();
console.log(lista);
//Ver o tamanho da lista:
console.log(lista.length);
//Reverter a lista:
console.log(lista.reverse());
//Converter a lista para String:
console.log(lista.toString());
//Separar a lista convertida em String com qualquer outro elemento:
console.log(lista.join(" - "));
console.log(lista.join(" | "));

// Dicionário (algo como json, mas usado diretamente no script):

var fruta = {nome:"maçã", cor: "vermelha"}
console.log(fruta)
console.log(fruta.nome);

var frutas = [{nome:"maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
console.log(frutas[1].nome);

// Condicionais, laços de repetição e Date:
//Usar o prompt para fazer input:
// var idade = prompt("Insira sua idade: ");
// if (idade >= 18) {
//     console.log("maior de idade");
//     alert("maior de idade");
// }else{
//     console.log("menor de idade");
//     alert("menor de idade");
// }

//Laços de repetição:
var count = 0;
while (count <= 5) {
    console.log(count);
    count++
}

var count1;
for (count=0; count<=10; count++){
    console.log(count);
};

// Data:
var d = new Date();
console.log(d);
console.log(d.getMonth()+1); //O getMonth sempre começa do zero, então além da função tem que colocar +1.
console.log(d.getDay()); //Dia da semana.
//Também tem outras funções de acordo com o que se coloca o nome da função.

var lista = ["Alemanha", "Inglaterra", "Escócia"]/
lista.push("Polônia");
console.log(lista);

function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

// alert(soma(5, 10));
// alert(setReplace("Vai, Japão", "Japão", "Brasil"));

function validarIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

// var idade = prompt("Qual sua idade?")
// console.log(validarIdade(idade));

function clicou(){
    window.open("https://bancointer.com.br/")
}
function calcular() {
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById('resultado').innerHTML = n1 + n2;
  }