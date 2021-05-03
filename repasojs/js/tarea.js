
 //export const pasear ='pasear al perro'
// const tarea ='dar de comer'
//  export default {
//       nombre : pasear,
//       tarea: tarea
//  }

//exportar funciones

// export const creartarea = (nombre,prioridad) =>{
//          return `la tarea es ${pasear} tiene una urgencia ${prioridad}`
// }

// export const tareacompletada = () => {
//     console.log('tarea finalizada')
// }

//exportar clase

export default class persona{
    constructor(nombre,prioridad ){
         this.nombre = nombre,
         this.prioridad = prioridad
    }

    mostrar(){
       console.log(`el nombre es ${this.nombre} y su prioridad es ${this.prioridad}`)
        
    }
}