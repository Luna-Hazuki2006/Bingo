let tablero = document.getElementById("tablero")
let tablitas = document.getElementById('tablitas')
let cantidad = 5
let letras = ['B', 'I', 'N', 'G', 'O']
let numeros = []

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
        let tr = document.createElement('tr')
        for (const letra of letras) {
            let th = document.createElement('th')
            th.innerText = letra
            tr.appendChild(th)
        }
        tabla.appendChild(tr)
        let resto = []
        for (let i = 0; i < 5; i++) {
            tr = document.createElement('tr')
            
        }
        tablitas.appendChild(tabla)
    }
}

llenar()
crear()