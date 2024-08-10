let percentual, valorcompra, valorrevenda

percentual = parseFloat(prompt("Digite o percentual de acrescimo em %:"))
valorcompra = parseFloat(prompt("Digite o valor que voce comprou:"))

valorrevenda = (valorcompra * ((percentual / 100) + 1)).toFixed(2)

document.write("Você terá que vender por " + valorrevenda + " R$")

