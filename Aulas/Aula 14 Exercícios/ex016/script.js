function calc() {
    let num = document.getElementById('inum')
    let num1 = document.getElementById('inum1')
    let pass = document.getElementById('ipas')
    let res = document.getElementById('res')
    
    if (num.value.length == 0 || num1.value.length == 0 || pass.value.length == 0){
        alert('Você Precisa Escolher um Número Inicial, Final e os Passos da Contagem.')
        return;
    } 

    let inicio = Number(num.value)
    let fin = Number(num1.value)
    let pas = Number(pass.value)
    let c = inicio
    res.innerHTML = '<br>Contando:<br><br> '

    if (c < fin) {
        do {
            res.innerHTML += `${c} >> `
            c += pas
        } while (c < fin)
    } 
    
    if (c > fin) {
        do {
            res.innerHTML += `${c} >> `
            c -= pas
        } while (fin <= c)
    } 
    res.innerHTML += ` ${c} >> <strong>Final!</strong>`
}