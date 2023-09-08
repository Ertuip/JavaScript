function calcular() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('itxt')
    if (num.value.length == 0) {
        alert('Digite Um Número!')
        return;
    } else {
        var n1 = Number(num.value)
        let p = 1
        tab.innerHTML = ''
        do {
            let item = document.createElement('option')
            item.text = `${n1} x ${p} = ${n1*p}`
            item.value = `tab${p}`
            tab.appendChild(item)
            p++
        } while (p <= 10)
    }
}
