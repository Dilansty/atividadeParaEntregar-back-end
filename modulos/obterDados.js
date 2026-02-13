/***********************************************************************
  * Objetivo: obtenção de dados
 ***********************************************************************/

// função para receber o input do usuário
function obterDados(valor1, valor2) {

    //import da biblioteca do readline
    const readline = require('readline')

    //Cria o objeto de entrada de dados
    const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    //Introdução ao programa
    console.log('Bem vindo a aplicação de calculos')

    //entrada do tipo de operação
    entradaDeDados.question('Por favor digite qual das quatro operações basicas você quer: ', function (operacao) {
        let escolhaoperador = operacao
        let resultado

        // logica para multiplos tipos de String para multiplicação
        if (escolhaoperador == 'multiplicação' || escolhaoperador == 'multiplicaçao' || escolhaoperador == 'multiplica' || escolhaoperador == 'multiplicar' || escolhaoperador == 'vezes' || escolhaoperador == 'multiplicacao') {

            //entrada do valor a ser multiplicado
            entradaDeDados.question(`insira o valor a ser multiplicado: `, function (multiplicado) {
                let valor1 = multiplicado

                entradaDeDados.question(`insira por quantas vezes: `, function (multiplicador) {
                    let valor2 = multiplicador

                    let calculadora = require('./calculos.js')
                    let calculosmulti = calculadora.multiplicar(Number(valor1), Number(valor2), resultado)

                })

            })
            //console.log(`o resultado é: ${resultado}`)
        }

        // logica para multiplos tipos de String para soma
        else if (escolhaoperador == 'soma' || escolhaoperador == 'somar' || escolhaoperador == 'adição' || escolhaoperador == 'mais') {

            //entrada do valor a ser multiplicado
            entradaDeDados.question(`insira o primeiro valor a ser somado: `, function (soma1) {
                let valor1 = soma1

                entradaDeDados.question(`insira por o segundo valor a ser somado: `, function (soma2) {
                    let valor2 = soma2

                    let calculadora = require('./calculos.js')
                    let calculosSomar = calculadora.somar(Number(valor1), Number(valor2), resultado)

                })

            })
        }

        else if (escolhaoperador == 'divisão' || escolhaoperador == 'dividir' || escolhaoperador == 'divisao') {

//entrada do valor a ser multiplicado
            entradaDeDados.question(`insira o valor a ser dividido: `, function (soma1) {
                let valor1 = soma1

                entradaDeDados.question(`insira por quanto ele vai ser dividido: `, function (soma2) {
                    let valor2 = soma2

                    let calculadora = require('./calculos.js')
                    let calculosdivi = calculadora.dividir(Number(valor1), Number(valor2), resultado)

                })

            })

        }

        else if (escolhaoperador == 'menos' || escolhaoperador == 'subtração' || escolhaoperador == 'subtracao' || escolhaoperador == 'subtrair') {

            //entrada do valor a ser multiplicado
            entradaDeDados.question(`insira valor para ser subtraído: `, function (soma1) {
                let valor1 = soma1

                entradaDeDados.question(`insira o valor para subtraír: `, function (soma2) {
                    let valor2 = soma2

                    let calculadora = require('./calculos.js')
                    let calculosSubtracao = calculadora.subtrair(Number(valor1), Number(valor2), resultado)

                })

            })
        }
    })

}
module.exports = {
    obterDados
}
