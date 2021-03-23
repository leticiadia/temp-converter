function conversorTemperatura(){

    var temperatura = document.getElementById('conversor').value

    tempo = parseFloat((temperatura * 9 / 5) + 32)

    document.getElementById('info').innerHTML = "Temperatura em Graus Fahrenheit " + tempo + " ºF";

}


console.log(conversorTemperatura())




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  