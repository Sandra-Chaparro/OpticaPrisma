import React from 'react'
import "./LentesGraduados.css"

export default function LentesGraduados() {
  return (
    <div>
    <h1 className='lentesGraduadosTitle'>Lentes Graduados</h1>
    <p className='subtitle'>Variedad y Estilo para Tu Comodidad</p><br></br>
    <div className='lentesGraduadosContainer'>

        <div className='lentesParaContainer'>
            <p className='lentesGraduadosPara'>
              En nuestra óptica, sabemos que cada persona tiene un estilo único, por eso ofrecemos una amplia gama de armazones para lentes graduados que se adaptan a todas tus necesidades y preferencias. 
              <br></br><br></br>Ya sea que busques un diseño clásico y elegante, un estilo moderno y vanguardista, o algo más deportivo y funcional, tenemos la opción perfecta para ti.
              Ven y descubre por qué nuestros lentes graduados no solo mejoran tu visión, ¡sino también tu look!</p><br></br>
              <img 
            src ="/Images/lentesGImg.jpg"
            className='lentesGImg'
            />
        </div>
        <div className='lentesImgContainer'>
            <img 
            src ="/Images/framesVariety.jpg"
            className='imgLentesGraduados'
            />
        </div>
    </div>
    </div>
  )
}
