import React from 'react'
import '../stylesheets/tarea.css'

function Tarea({id, tarea, completada, complentarTarea, eliminarTarea}) {
  return (
    <>

    <div className='card my-2 p-2'
    onClick={()=>complentarTarea(id)}>
      
    


    <div className="card my-2 p-2">
        <div className="d-flex justify-content-between align-items">
            <p className={completada ? 'mb-0 tachado' :'mb-0'}>{tarea}</p>
            <button className='btn btn-danger'
            onClick={()=>eliminarTarea(id)}>Delete</button>
        </div>
    </div>
    </div>
    </>
  )
} 

export default Tarea