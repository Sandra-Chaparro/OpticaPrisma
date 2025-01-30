import React from 'react'
import "./LentesDeSol.css"

export default function LentesDeSol() {
  return (
  <>
  <h1 className='lentesSolTitle'>Lentes De Sol</h1>    
    <div className='lentesSolContainer'>
    
            
    <div className='textContainerLentesSolPage'>
        <p className='lentesSolPara'>
          Protege tu vista con estilo gracias a nuestra exclusiva colección de lentes de sol. En Óptica Prisma, ofrecemos una amplia variedad de modelos que combinan diseño, comodidad y la mejor protección contra los rayos UV.
          Ya sea que busques un look clásico, moderno o deportivo, contamos con lentes de sol para cada ocasión y necesidad. Además, nuestras opciones con filtro polarizado reducen reflejos y mejoran la claridad visual,
         brindándote una experiencia más nítida y cómoda al aire libre.
         <br></br><br></br>
        Visítanos y encuentra el par perfecto para cuidar tu vista mientras luces increíble. ¡Tu protección solar comienza aquí!
        </p>  
    </div>
    <div className='imgContainerLentesSolPage'> 
    <img
        className='lentesSolImg'
        src="/Images/lentesSol.jpg"    
        />
    </div>
  </div>
  </>
  )
}
