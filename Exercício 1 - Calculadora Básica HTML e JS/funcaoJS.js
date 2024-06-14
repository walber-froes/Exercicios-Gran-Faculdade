function Soma()
{
    var num1 = parseInt(document.getElementById("n1").value)
    var num2 = parseInt(document.getElementById("n2").value)

    var soma = num1 + num2
    
    document.getElementById("res").innerHTML = "Resultado: " + soma
}

function Subtração()
{
    var num3 = parseInt(document.getElementById("n1").value)
    var num4 = parseInt(document.getElementById("n2").value)

    var diminuição = num3 - num4

    document.getElementById("res").innerHTML = "Resultado: " + diminuição
}

function Multiplicação()
{
    var num5 = parseInt(document.getElementById("n1").value)
    var num6 = parseInt(document.getElementById("n2").value)

    var multiplicação = num5 * num6

    document.getElementById("res").innerHTML = "Resultado: " + multiplicação
}

function Divisão()
{
    var num7 = parseInt(document.getElementById("n1").value)
    var num8 = parseInt(document.getElementById("n2").value)

    var divisão = num7 / num8

    document.getElementById("res").innerHTML = "Resultado: " + divisão
}