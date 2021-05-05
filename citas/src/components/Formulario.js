import React,{Fragment,useState}from 'react'

const Formulario = () => {

   const [cita, actualizarcita] = useState({
    mascota:'',
    propietario:'',
    date:'',
    hora:'',
    sintomas:''


   })

   const actualizarstate  = (e) =>{
      //nunca se actualiza el state 
      //se modifica la funcion y siempre se manda a llamar el state para q se muestre todo
       actualizarcita({
           ...cita,
           [e.target.name]:e.target.value
       })
   }

   //extraemos los datos con destructurin
   const {mascota,propietario,date,hora,sintomas} = cita;



    return (  
        <Fragment>
            <h2>Crear Cita</h2>

               <form>
                    <label>Nombre de la mascota</label>
                    <input
                      type="text"
                      name ="mascota"
                      className ="u-full-width"
                      placeholder ="Nombre Mascota"
                      onChange = {actualizarstate}
                      value ={mascota}
                    /> 

                   <label>Nombre Dueño</label>
                    <input
                      type="text"
                      name ="propietario"
                      className ="u-full-width"
                      placeholder ="Nombre propietario de la mascota"
                      onChange = {actualizarstate}
                      value ={propietario}
                     /> 

                   <label>Fecha</label>
                     <input
                      type="date"
                      name ="fecha"
                      className ="u-full-width"
                      onChange = {actualizarstate}
                      value ={date}
                      
                     /> 

                  <label>Hora de alta</label>
                     <input
                      type="Time"
                      name ="hora"
                      className ="u-full-width"
                      onChange = {actualizarstate}
                      value ={hora}
                     /> 

                  <label>Sintomas de la mascota</label>

                      <textarea
                         className ="u-full-width"
                         name ="sintomas"
                         onChange = {actualizarstate}
                         value ={sintomas}
                      > </textarea>
                       
                     <button
                       type ="submit"
                       className = "u-full-width button-primary"
                     >Agregar Cita</button>

            </form>

        </Fragment>
    );
}
 
export default Formulario;