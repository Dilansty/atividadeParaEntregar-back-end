/***********************************************************************
  * Objetivo: Aplicação para realizar as 4 operações matemáticas básicas
  * data: 13/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/



let interfaceCliente = require('./modulos/obterDados.js')
let calculadora = require('./modulos/calculos.js')

let entradaDados = interfaceCliente.obterDados()
let calculosmulti = calculadora.multiplicar()
let calculosdivi = calculadora.dividir()
let calculossubt = calculadora.subtrair()
let calculossoma = calculadora.somar()


