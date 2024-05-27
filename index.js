let tablero = document.getElementById("tablero")
let tablitas = document.getElementById('tablitas')
let cantidad = 15
let letras = ['B', 'I', 'N', 'G', 'O']
let informacion = document.getElementById('aleatorio')
let numeros = []
let aleatorio = 0
let buscados = []
let marca = '✨'

function llenar() {
    let columna = []
    for (let i = 1; i <= 75; i++) {
        if (i == 1) {
            columna = []
        } else if ((i % 15) == 0) {
            columna.push(i)
            numeros.push(columna)
            columna = []
            continue
        } 
        columna.push(i)
    }
    let tr = document.createElement('tr')
    for (const letra of letras) {
        let th = document.createElement('th')
        th.innerText = letra
        tr.appendChild(th)
    }
    tablero.appendChild(tr)
    for (let i = 0; i < 15; i++) {
        tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td')
            td.innerText = numeros[j][i]
            tr.appendChild(td)
        }
        tablero.appendChild(tr)
    }
    tablero.appendChild(tr)
    console.log(numeros);
}

function crear() {
    for (let i = 0; i < cantidad; i++) {
        let tabla = document.createElement('table')
        tabla.id = i
        let tr = document.createElement('tr')
        for (const letra of letras) {
            let th = document.createElement('th')
            th.innerText = letra
            tr.appendChild(th)
        }
        tabla.appendChild(tr)
        let resto = [[], [], [], [], []]
        for (let j = 0; j < letras.length; j++) {
            tr = document.createElement('tr')
            for (let k = 0; k < letras.length; k++) {
                let numero = Math.floor(Math.random() * numeros[k].length)
                let actual = numeros[k][numero]
                while (resto[k].includes(actual)) {
                    numero = Math.floor(Math.random() * numeros[k].length)
                    actual = numeros[k][numero]
                }
                resto[k].push(actual)
                let td = document.createElement('td')
                if (j == 2 && k == 2) td.innerText = marca
                else td.innerText = actual
                td.id = i + '-' + j + '-' + k
                tr.appendChild(td)
            }
            tabla.appendChild(tr)
        }
        console.log(resto);
        tablitas.appendChild(tabla)
    }
}

function buscar() {
    let nuevo = tablero.getElementsByTagName('td')
    let encontrar = Math.floor(Math.random() * nuevo.length)
    while (buscados.includes(nuevo[encontrar].innerText) || 
            nuevo[encontrar].innerText == marca) {
        encontrar = Math.floor(Math.random() * nuevo.length)
    }
    let perfecto = nuevo[encontrar].innerText
    informacion.innerText = 'El número elegido es: ' + perfecto
    nuevo[encontrar].innerText = marca
    for (const este of tablitas.children) {
        for (const esto of este.getElementsByTagName('td')) {
            if (perfecto == esto.innerText) {
                esto.innerText = marca
                revisar(este)
                break
            }
        }
    }
    buscados.push(perfecto)
    console.log(perfecto);
     
}

function revisar(carton = document.createElement('table')) {
    let lista_xy = []
    let lista_yx = []
    let ultima = letras.length - 1
    for (let i = 0; i < letras.length; i++) {
        let lista_x = []
        let lista_y = []
        for (let j = 0; j < letras.length; j++) {
            lista_x.push(document.getElementById(carton.id + '-' + i + '-' + j))
            lista_y.push(document.getElementById(carton.id + '-' + j + '-' + i))
            if (i == j) {
                lista_xy.push(document.getElementById(carton.id + '-' + i + '-' + j))
            }
            if (j == ultima) {
                lista_yx.push(document.getElementById(carton.id + '-' + i + '-' + j))
                ultima--
            }
        }
        if (lista_x.every(x => x.innerText == marca) || 
            lista_y.every(x => x.innerText == marca)) {
            carton.classList.add('vencedor')
            let boton = document.getElementById('buscar')
            boton.setAttribute('disabled', 'disabled')
            return
        } 
    }
    if (lista_xy.every(x => x.innerText == marca) || 
        lista_yx.every(x => x.innerText == marca)) {
        carton.classList.add('vencedor')
        let boton = document.getElementById('buscar')
        boton.setAttribute('disabled', 'disabled')
    }
}

llenar()
crear()