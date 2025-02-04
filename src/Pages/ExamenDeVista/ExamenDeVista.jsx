import React from 'react'
import "./ExamenDeVista.css"

export default function ExamenDeVista() {
  return (
  
    <>
    <h1 className='ExamenDeVistaTitle'>Examen De Vista</h1>    
      <div className='ExamenDeVistaContainer'>
      
              
      <div className='textContainerExamenDeVistaPage'>
          <p className='ExamenDeVistaPara'>En Óptica Prisma, tu salud visual es nuestra prioridad. Nuestro examen de la vista
            es realizado por profesionales que evalúan tu agudeza visual, detectan posibles problemas oculares y te asesoran
            sobre la mejor solución para tus necesidades. Con tecnología avanzada y un proceso cómodo y preciso, te 
            ayudamos a encontrar la graduación perfecta para tus lentes.
            <br></br><br></br>
            Agenda tu examen hoy mismo y mejora tu visión con nosotros.</p>  
      </div>
      <div className='imgContainerExamenDeVistaPage'> 
      <img
          className='ExamenDeVistaImg'
          src="/Images/eyeExam.jpg"    
          />
      </div>
    </div>
    </>
  )
}


