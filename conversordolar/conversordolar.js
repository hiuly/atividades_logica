let cotacao, real, dolar

cotacao = parseFloat(prompt("Digite a cotação do dolar:"))
real = parseFloat(prompt("Digite quantos reais você tem:"))

dolar = real * cotacao

document.write("Você tem "+ dolar +" US$")