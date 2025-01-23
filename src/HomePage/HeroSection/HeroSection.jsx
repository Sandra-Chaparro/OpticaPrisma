import React from 'react'
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero">
      <div className='heroh1Container'>
        <h1 className="heroh1">
          Optometría general y pediátrica.
        </h1>
      </div>
      <div className='heroContainer'>
      <div className='leftHeroSection'>
      <div className="hero-text">
        <h2 className="heroh2">
          <span>
            Localiza tu optica! <br></br>Contamos con 2 sucursales.
          </span>
        </h2>  
        <div className='map-img'>
          <img
            src="/Images/mapImg.png"
            alt="A professional web designer working on a website"
            className="rounded-lg"
          />
        </div> 
      </div>
      <div>
        
      </div>
      </div>

    <div className='rightHeroSection'>
    <div className="hero-image">
            <img
              src="/Images/heroImg.jpg"
              alt="Foto de optometristas de la optica"
            />
          </div>

        <div className='hero-buttonContainer'>
          <a href="/contacto" className="quote-link">Contactanos ahora!</a>
        </div>
    </div>
    </div>
  
  </div>
  )
}
