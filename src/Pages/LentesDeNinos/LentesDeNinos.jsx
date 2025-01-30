import React from 'react'
import "./LentesDeNinos.css"

export default function LentesDeNinos() {
  return (
  <>
  <h1 className='lentesNinosTitle'>Lentes para niños y niñas</h1>    
    <div className='lentesNinosContainer'>
    
            
    <div className='textContainerLentesNinosPage'>
        <p className='lentesNinosPara'>
        La protección visual de los más pequeños es nuestra prioridad. En Óptica Prisma, contamos con una amplia selección de lentes diseñados especialmente para niños y niñas, combinando comodidad, durabilidad y estilos divertidos que les encantarán.
        Nuestros lentes infantiles ofrecen materiales resistentes, monturas ligeras y la mejor protección para cuidar sus ojos en todo momento. tenemos el par ideal para cada niño.
        <br></br><br></br>
        ¡Ven y descubre la mejor opción para su visión y bienestar!
        </p>  
    </div>
    <div className='imgContainerLentesNinosPage'> 
    <img
        className='lentesSolImg'
        src="/Images/kidsGlasses.jpg"    
        />
    </div>
  </div>
  </>
  )
}
