import React from 'react'
import "./LentesContacto.css"

export default function LentesContacto() {
  return (
  <>
  <h1 className='lentesContactoTitle'>Lentes de Contacto</h1>    
    <div className='lentesContactoContainer'>
    
            
    <div className='textContainerContactLensesPage'>
        <p className='lentesContactoPara'>Descubre la comodidad y libertad de visión que ofrecen nuestros lentes de contacto. 
            En Optica Prisma, contamos con una amplia variedad de opciones diseñadas para adaptarse a tu estilo de vida y necesidades visuales.
            Nuestro equipo de especialistas te asesorará para encontrar los lentes ideales, garantizando confort, salud ocular y una visión clara en todo momento. 
            <br></br><br></br>
            ¡Visítanos y prueba la mejor experiencia en lentes de contacto!</p>  
    </div>
    <div className='imgContainerContactLensesPage'> 
    <img
        className='lentesContactoImg'
        src="/Images/contactImg.jpg"    
        />
    </div>
  </div>
  </>
  )
}
