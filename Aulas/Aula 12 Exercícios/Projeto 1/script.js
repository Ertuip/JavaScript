function load() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var parag = document.getElementById('data')
    var foto = document.getElementById('foto')

    if (min < 10) {
        min = '0' + min
    }

    if (hora == 0) {
        parag.innerHTML = `Já é Meia Noite.`
        foto.innerHTML = '<img src="img 1/Noite-1_3.png" alt="Foto de uma Noite">'
        document.body.style.background.color = '#515154'
    } else if (hora > 0 && hora < 6) {
        parag.innerHTML = `Já são ${hora}:${min} da Madrugada`
        foto.innerHTML = '<img src="img 1/Noite-1_3.png" alt="Foto de uma Noite">'
        document.body.style.background.color = '#515154'
    } else if (hora >= 6 && hora < 12) {
        parag.innerHTML = `Agora São ${hora}:${min} Horas da Manhã.`
        foto.innerHTML = '<img src="img 1/Manhã-1.png" alt="Foto de uma Manhã">'
        document.body.style.background.color = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        parag.innerHTML = `Agora São ${hora}:${min} Horas da Tarde.`
        foto.innerHTML = '<img src="img 1/Tarde-1.png" alt="Foto de uma Tarde">'
        document.body.style.background.color = '#b9846f'
    } else if (hora >= 18 && hora < 0) {
        parag.innerHTML = `Já São ${hora}:${min} da Noite`
        foto.innerHTML = '<img src="img 1/Noite-1_3.png" alt="Foto de uma Noite">'
        document.body.style.background.color = '#515154'
    }
}

load()
