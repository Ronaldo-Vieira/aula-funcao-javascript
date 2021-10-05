function palavra(palavra = String) {
    
    var separador = palavra.split(" ")
    var contador = 0
    
    separador.forEach( (elemento) => {

        if(elemento == "Ola") {
            contador++
        }
    })
    return contador
}

console.log(palavra("Ola mundo ! Ola inscritor do mundo"))

