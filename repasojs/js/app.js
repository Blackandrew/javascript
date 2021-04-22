//creando variables

// var mensaje = "Hola juan"
// const bandera ='hola'
// let prueba = "js"

//scope o alcance

// var musica="rock"

// if(musica){
//     var musica="reggue"
//     console.log("dentreo del if",musica)
// }


// let musica = "rock"

// if(musica){
//     let musica="reggue"
//     console.log("dentreo del if",musica)
// }


//tamplate string

// const nombre = 'marlon'

// //concatenar varias lineas
// const contenedorapp =document.querySelector('#app')
// let html = `
//       <ul>
//         <li>nombre: ${nombre}</li>
        
//         <li>apellido: ${nombre}</li>
        

//       </ul>
// `;

//  contenedorapp.innerHTML=html;

//console.log(`mi nombre es ${nombre}`)

//funciones declaration
// function saludar(nombre){
//     console.log(nombre)
// }


// //funciones expretion 
// const cliente = function(nombrec){
//     console.log(nombrec)
// }
// cliente("solis")
// saludar('marlon')

//funciones con parametros

// function parametro(nombre='marlon',edad=27){
//     console.log(`nombre de la persona ${nombre}, edad ${edad}`)
// }

// parametro()

//arrow function

let viajando = (pais = 'managua') => {
    return(`estoy viajando a ${pais}`)
}

//let viaje = viajando()

// console.log(viaje)

//objet literal

// const persona = {
//     nombre: 'marlon',
//     edad: 28,
//     viaje: viajando(),
//     nacion: nacionalidad = {
//       pais: 'managua'
//     }
// }
// console.log(persona)

//acceder a campos del objeto como una struct
// console.log(persona.nombre)

//objeto constructor como clases
// function tarea(nombre,edad){
//      this.nombre = nombre,
//      this.edad=edad
// }

// //uso de prototy

// tarea.prototype.mostrarinfo = function() {
//     return `mi nombre es ${this.nombre},y mi edad ${this.edad}`
// }



// const  tarea1 = new tarea('marlon',28)
// const  tarea2 = new tarea('solis',28)

// console.log(tarea1.mostrarinfo())

//destrocturing o forma de como extraer los datos de un objeto

// const aprendiendojs = {
//     version: {
//          nueva: 'ES6',
//          vieja: 'ES5'
//     },
//     frameword:  ['reactjs','VUEJS','angularjs']
// }

// console.log(aprendiendojs)
// //extraccion version anterior
// let version = aprendiendojs.version.nueva
// //console.log(version)

// //nueva forma para extraer datos
// let {nueva,vieja} = aprendiendojs.version
// console.log(vieja,nueva)

//object literal enhacement o unir varias variables

const banda ='metalica'
const genero ='havi metal'
const cancion = ['dddd','dssss','xxxxx']

//unir forma anterior
// const metalica={
//       banda: banda,
//       genero: genero,
//       cancion: cancion
// }

//unir forma actual

const metalica ={banda,genero,cancion}

console.log(metalica)
