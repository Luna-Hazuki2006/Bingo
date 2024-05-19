let tablero = document.getElementById("tablero")
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
    let letras = ['B', 'I', 'N', 'G', 'O']
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

llenar()