/***********************************************************************
  * Objetivo: obtenção de dados
 ***********************************************************************/

function multiplicar(valor1, valor2) {
    let multiplicado = valor1
    let multiplicador = valor2
    

    let resultMulti =  (multiplicado * multiplicador)
    
    if(!isNaN(resultMulti)){
    console.log(`o resultado é: ${resultMulti}`)
    return true
    }
    return false

}

function dividir(valor1, valor2) {
    let dividido = valor1
    let divisor = valor2

    let resultadoDivisao = (dividido / divisor)
    
    if(!isNaN(resultadoDivisao)){
        console.log(`o resultado é: ${resultadoDivisao}`)
        return true
        }
        return false

}

function somar(valor1, valor2) {
    let somador1 = valor1
    let somador2 = valor2

    let resultadoSoma = (somador1 + somador2)
    
    if(!isNaN(resultadoSoma)){
        console.log(`o resultado é: ${resultadoSoma}`)
        return true
        }
        return false


}

function subtrair(valor1, valor2) {
    let minuendo = valor1
    let subtraendo = valor2

    let resultadoSubtracao = (minuendo - subtraendo)

    if(!isNaN(resultadoSubtracao)){
        console.log(`o resultado é: ${resultadoSubtracao}`)
        return true
        }
        return false
    }
module.exports = {
    multiplicar,
    dividir,
    somar,
    subtrair
}
