function conversorTemperatura(){

    const form = document.querySelector('form')
    form.addEventListener('submit', e => e.preventDefault())

    var temperatura = document.getElementById('conversor').value
    tempo = parseInt((temperatura * 9 / 5) + 32)
    document.getElementById('info').innerHTML = "Temperatura em Graus Fahrenheit " + tempo + " ºF"

}

conversorTemperatura()


