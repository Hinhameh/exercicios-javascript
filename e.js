//Ex. 01
let nome= "joao"
console.log(nome)

//Ex. 02
let a=5, b=10
a=a+b
console.log(a)

//Ex. 03
let primeironome='Josefa', sobrenome='Silva'
console.log(primeironome, sobrenome)

//Ex. 03
let pessoa={nome:'batata', idade:18,endereco:'rua das palmeiras',telefone:'69'}
console.log(pessoa)

//Ex. 04
let frutas=['maçã',"banana", 'laranja']
frutas[3]="manga" //add a uma determinada casa ex: [3]
frutas.push('uva') //add a ultima casa 
console.log(frutas)

//Ex. 05
let numeros=[1,2,3,4,5]
console.log(numeros[0], numeros [4])

//Ex. 06
let cores=['vermelho', 'verde','azul']
for(let i=0;i<3;i++){
console.log(cores[i])}

//Ex. 07
let idade=8
if(18>=idade){console.log("maior de idade")
}else{console.log('menor de idade')}

//Ex. 08
let nota=Math.random() * 10
console.log(nota);
if(nota>=7){
    console.log('Aprovado')
} else if(nota>=5){
    console.log("Recuperação")
} else {
    console.log('Reprovado')
}
//Ex. 09
let diadasemana=Math.random(7)*10
console.log(diadasemana)
switch(diadasemana){ //switch=escolha
    case 1:{console.log('hj é domingo')
        break }
    case 2:{console.log("hj é segunda")
        break}
    case 3:{console.log("hj é terca")
        break}
    case 4:{console.log("hj é quarta")
        break}
    case 5:{console.log('hj é quinta')
        break}
    case 6:{console.log('hj é sexta')
         break}
    case 7:{console.log("hj é sexta")
        break } //stop
        default://caso contrario*
        console.log('não existe')
}

let n1=1
for(let n1=1;n1<10;n1++)