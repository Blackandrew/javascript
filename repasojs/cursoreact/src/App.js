
import React,{Fragment,useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'

function App() {

  

  const [productos, setproducto] = useState([

    {id:1,nombre:'camisa react',precio:50},
    {id:2,nombre:'camisa vuejs',precio:60},
    {id:3,nombre:'camisa node.js',precio:70}

  ]);

  //state para carrito
   const [carrito, guardarcarrito] = useState([])


  const fechas = new Date().getFullYear();
  return (
   <Fragment>
      <Header 
         titulo = 'Tienda virtual'
      />


      <h1>Lista de productos</h1>

             {
                productos.map(producto =>(
                    <Productos 
                      key = {producto.id}
                      producto = {producto}
                      productos = {productos}
                      carrito = {carrito}
                      guardarcarrito = {guardarcarrito}
                    />
                ))
             }

      <Footer
         fechas = {fechas}
      />

   </Fragment>
    
   
  );
}

export default App;
