

const formNames = [{name : "nombre-Copy-1"},{name : "nombre-Copy-6"},{name : "nombre-Copy-5"}, {name : "nombre-Copy-9"}]

const names = "nombre"

const algo = formNames.filter( f => f.name.indexOf(names + "-Copy") >= 0)

let newName = ''
let may = 0

let ultimaLetra = algo.map( (e) => {
    let letras = e.name
    for(let i = 0 ; i<letras.length ; i++){
        let numbers = parseInt(letras[i])
        if(numbers >= may){
            may = numbers
            may += 1
            newName = names + "-Copy-" + (may.toString())
        }
    }
})
console.log("este num es mayor: ",may)

console.log(newName)


