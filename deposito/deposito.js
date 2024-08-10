
let deposito, rendimento

rendimento = 1.0007
deposito = parseFloat(prompt("Digite quanto voce quer depositar:"))

valor = (deposito * rendimento).toFixed(2)

document.write("Você terá " + valor + " R$ no proximo mes")