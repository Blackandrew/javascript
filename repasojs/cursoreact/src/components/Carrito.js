import React from 'react'
import  './cars.css'
import Productos from './Productos'
const Carrito = ({carrito,guardarcarrito}) => {
   
    return (  

        // <div className="">{carrito}</div>
        <div  className="carrito">
            <h2>tu carrito</h2>
            { carrito.length === 0
            ?

            ( <p>No hay producto</p>)
              
        
            :(carrito.map(producto =>(
                <Productos 
                  key={producto.id}
                   producto = {producto}
                   carrito = {carrito}
                   guardarcarrito={guardarcarrito}
                /> 
           ))) }
         </div>
     
    );
}
 
export default Carrito;
