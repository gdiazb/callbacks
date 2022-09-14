const motos = []

function initial() {
    setTimeout(() => {
        var moto = window.prompt('Escribe el nombre de una marca de motos');
        if(moto !== null) {
            agregarMoto(moto, mostrarMotos)
            initial()
        }
    }, 1000);
}


function agregarMoto(moto, callback) {
    motos.push(moto)
    callback()
}

function mostrarMotos() {
    let newMoto = document.createElement('li')
    newMoto.classList.add('list__item')
    newMoto.textContent = ''

    motos.forEach(moto => {
        newMoto.textContent = moto
        document.querySelector('ul').appendChild(newMoto)
    });
}

initial()
