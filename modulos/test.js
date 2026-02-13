 //import da biblioteca do readline
 const readline = require('readline')

 //Cria o objeto de entrada de dados
 const entradaDeDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 })

 console.log('Bem vindo a aplicação de calculos')
 //entrada nome do cliente
 entradaDeDados.question('Por favor digite qual das quatro operações basicas você quer: ', function (operacao) {
     let escolhaoperador = operacao
     let resultado

     if(escolhaoperador == 'multiplicação' || escolhaoperador == 'multiplicaçao' || escolhaoperador == 'multiplica' || escolhaoperador == 'multiplicar' || escolhaoperador == 'vezes' || escolhaoperador == 'multiplicacao'){

         let operacao = require('./modulos/calculos.js')

         let multiplica = operacao.multiplicar(valor1,valor2,resultado)

         console.log(`o resultado é ${resultado}`)
     }




     })