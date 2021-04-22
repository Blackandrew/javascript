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

//objetos

const persona = {
    nombre: 'marlon',
    edad: 28,
    viaje: viajando(),
    nacion: nacionalidad = {
      pais: 'managua'
    }
}
console.log(persona)

//acceder a campos del objeto como una struct
console.log(persona.nombre)