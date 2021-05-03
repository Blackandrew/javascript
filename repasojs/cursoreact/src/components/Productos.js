
//imr
import React from 'react';

//sfc

const Productos = ({producto,carrito,guardarcarrito,productos}) => {

    const {nombre,precio,id} = producto

    const agregarcompra = () =>{
        // console.log('agregando producto ... '+id)
        const producto = productos.filter(producto => producto.id === id)[0]
        guardarcarrito([
            ...carrito,
            producto
        ])
    }
    return ( 
       <div>
         <h2>{nombre}</h2>
          <p>${precio}</p>
          <button type="button"
             onClick = {() => agregarcompra(id)}
          >Comprar</button>
       </div>
     );
}
 
export default Productos;