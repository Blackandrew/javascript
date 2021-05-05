
//imr
import React from 'react';

//sfc

const Productos = ({producto,carrito,guardarcarrito,productos}) => {

    const {nombre,precio,id} = producto

    const agregarcompra = (id) =>{
        // console.log('agregando producto ... '+id)
        const producto = productos.filter(producto => producto.id === id)[0]
        guardarcarrito([
            ...carrito,
            producto
        ])
    }

      const Eliminarproductos =(id)=>{
          const producto = carrito.filter(producto => producto.id !== id)
          guardarcarrito(producto)
      }

    return ( 
       <div>
         <h2>{nombre}</h2>
          <p>${precio}</p>
          
            
            {productos
            ?
               (
                <button type="button"
                onClick = {() => agregarcompra(id)}
                >Comprar</button>
               )
            :
              (
                <button type="button"
                onClick = {() => Eliminarproductos(id)}
                >Eliminar</button>
               )
            }

        </div>
     );
}
 
export default Productos;