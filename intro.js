var nombres = ['animal', 'pedro', 'juan']


function funciondeclarativa(nombre){
    console.log(`buenas tardes, ${nombre}`)
}
const functioExpression = function(nombre){
    console.log(`Hola, function expression,
    ${nombre}`)
}
const funcionFlecha = nombre => {
    console.log(`Hola, funcion de flecha, ${nombre}`)
}

for (var i=0; i<nombres.length; i++){
    funciondeclarativa(nombres[i])

    functioExpression(nombres[i])

    funcionFlecha(nombres[i])
}


nombres.pop
nombres.push('rosa')
nombres.unshift('juana')

nombres.indexOf("pedro")

var data = [
    {nombre: 'jose', edad: '25'},
    {nombre: 'alfredo', edad: 30},
    {nombre: 'carmen', edad: 30}
]



data.forEach(function(dato){
    console.log(dato.nombre)
})

data.forEach(function(dato){
    console.log(dato.edad)
})

data.filter(function(dato){
    console.log(data.edad>25)
})

var resultado = data.filter(function(dato){
    return dato.edad>25
})

var alumno = {
    nombre: 'Pedro',
    apellido: 'Guardado',

    mostrarDatos: function(){console.log(`$this.nombre, ${this.apellido}`)}
}