let num = document.getElementById('inum')
let lista = document.getElementById('ilista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Inválido ou Presente na Lista')
    }
    num.value = ''
    num.focus()
}

function clic() {
    if (valores.length == 0) {
        alert('Adicione Valores Antes de Finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menos = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior )
                maior = valores [pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Todo, Temos ${total} Números Cadastrados.</p>`
        res.innerHTML += `<p>O Maior Valor Informado Foi ${maior}.</p>`
        res.innerHTML += `<p>O Menor Valor Informado Foi ${menor}.</p>`
        res.innerHTML += `<p>Somando Todos Os Valores, Temos: ${soma}.</p>`
        res.innerHTML += `<p>A Média dos Valores Digitados é ${media}.</p>`
    }
}