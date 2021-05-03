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

// let viajando = (pais = 'managua') => {
//     return(`estoy viajando a ${pais}`)
// }

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

/****************** objeto constructor como clases ************************/
// function tarea(nombre,edad){
//      this.nombre = nombre,
//      this.edad=edad
// }

/**************uso de prototy *********************/

// tarea.prototype.mostrarinfo = function() {
//     return `mi nombre es ${this.nombre},y mi edad ${this.edad}`
// }



// const  tarea1 = new tarea('marlon',28)
// const  tarea2 = new tarea('solis',28)

// console.log(tarea1.mostrarinfo())

/************************* destrocturing o forma de como extraer los datos de un objeto*********************/

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

/******************* object literal enhacement o unir varias variables  **********************/

// const banda ='metalica'
// const genero ='havi metal'
// const cancion = ['dddd','dssss','xxxxx']

//unir forma anterior
// const metalica={
//       banda: banda,
//       genero: genero,
//       cancion: cancion
// }

//unir forma actual

// const metalica ={banda,genero,cancion}

// console.log(metalica)


/******************usar funciones en onjetos o clases *******************/

// const persona = {
//     nombre: 'marolon',
//     edad: 28,
//     // mostrarpersona: function(){
//     //     console.log(`mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
//     // }

//     mostrarpersona(){
//         console.log(`mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
//     }

// }

// persona.mostrarpersona();


/*********************uso de ciclos y .map ******************************/

//const carrito = ['producto1','producto2','producto3']

// console.log(carrito)

// const appcontenedor = document.querySelector('#app')

// let html ='';

// carrito.forEach(producto => {
//    html += `<li>${producto}</li>`
// })

// appcontenedor.innerHTML = html


//.map
//  carrito = ['producto1','producto2','producto3']

// carrito.map(producto =>{
//     return 'producto es'+producto
// })

/********************object.key ****************************/

// const persona ={
//     nombre:'marlon',
//     edad:28

// }

// console.log(Object.keys(persona))

//uso de spread operato ... es para combinar arreglos
 
// let lenguajes = ['js','python','php']
// let framework =['react','laravel','django']

/*******************unir arreglo manera anterior ************************/

// let unir_arreglos = lenguajes.concat(framework)

//console.log(unir_arreglos)

//nueva forma
// let convinar = [...lenguajes,...framework]
//console.log(convinar)

/*****************copiar arreglo anterior*****************/

// let [ultimo] = lenguajes.reverse()
// console.log(lenguajes)
// console.log(ultimo)

/****************copiar arreglo con spread**************/

// let [ultimo] =[...lenguajes].reverse()

// console.log(lenguajes)
// console.log(ultimo)

// function suma(a,b,c){

//  console.log(a+b+c)
// }


// let numero =[1,2,3]

// suma(...numero)


/**************metodos para areglos****************/

// const personas = [
//     {nombre:'marlon',edad:28,ocupacio:'analista'},
//     {nombre:'jerry',edad:29,ocupacio:'fronted'},
//     {nombre:'payo',edad:24,ocupacio:'backend'}
// ]

// ****************metodo filter ******************/

// const mayores = personas.filter(persona =>{
//     return persona.edad > 24
// })

// console.log(mayores)

// //metodo find

// const payo =personas.find(persona =>{
//     return persona.nombre ==='payo'
// })

// console.log(payo)

 /********************metodo reduce**********************/

// const total = personas.reduce((edadtotal,persona) =>{
//          return edadtotal + persona.edad
// },0)

// console.log(total / personas.length)

/******************uso de promesas las cuales son como el trach cacht **********************/

// const aplicardescuento = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          let descuento = true
//          if(descuento)
//          {
//             resolve('se le aplico el descuento')
//          }else{
//             reject('no se le aplico el descuento')
//          }
//     },3000)
// })

// aplicardescuento.then(resultado =>{
//     console.log(resultado)
// }).catch(error =>{
//     console.log(error)
// })

/*****************promise con ajax https://randomuser.me/api/?results=25&nat=us ***********************/


// const descargarusuario = cantidad => new Promise((resolve,reject) =>{
//     //pasar la cantidad al api
//     const api =  `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //llamado ajax

//     const xhr = new XMLHttpRequest()

//     //ABRIR LA CONEXION

//     xhr.open('GET',api,true)

//     //on load
//     xhr.onload = () =>{
//          if(xhr.status === 200){
//                  resolve(JSON.parse(xhr.responseText).results)
//          }else{
//              reject(Error(xhr.statusText))
               
//          }
//     }

//     //send

//     xhr.send()

//     //error
//     xhr.onerror = (error) => reject(error)


// })
// descargarusuario(5)
// .then(
//     miembros => imprimirhtml(miembros),
//     error => console.error( new Error('hubo un error'+error))
// )

// function imprimirhtml(usuarios){

//     let html =''

//     usuarios.forEach(usuario => {
//         html += `<li>
//                     nombre: ${usuario.name.first} ${usuario.name.last}
//                     pais: ${usuario.nat}
//                     imagen: <img src="${usuario.picture.medium}"> 
//             </li>`
//    });

//   const contenedorapp = document.querySelector('#app')
//   contenedorapp.innerHTML = html

// }

/***************uso de clases*******************/

// class persona{
//     constructor(nombre,prioridad ){
//          this.nombre = nombre,
//          this.prioridad = prioridad
//     }

//     mostrar(){
//        console.log(`el nombre es ${this.nombre} y su prioridad es ${this.prioridad}`)
        
//     }
// }
/*************herencia en js********************/
// class comprarproducto extends persona{
//      constructor(nombre,prioridad,cantidad){
//          super(nombre,prioridad)
//          this.cantidad = cantidad
//      }

//      mostrar(){
//         console.log(`el producto es ${this.nombre} y su prioridad es ${this.prioridad} y su cantidad es ${this.cantidad}`)
         
//      }
// }
//let tarea1= new persona('marlon','programar')
// let tarea2 = new comprarproducto('mango','alta',3)
//tarea1.mostrar()
//console.log(tarea1.mostrar())
// console.log(tarea2.mostrar())

/************uso de modulos en js***************/
// import {pasear,creartarea,tareacompletada} from './tarea.js'
import persona from './tarea.js'

const tarea = new persona('aprender js','alta')

//const tareas = creartarea('betoben','alta');
tarea.mostrar()
//console.log(tarea.mostrar())
// tareacompletada()


