import React from 'react'
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero">
      <h1 className="heroh1 hero-h1h2">
        Optometría general y pediátrica.
      </h1>
      
      <div className="hero-text ">
        <h2 className="heroh2 hero-h1h2">
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
  )
}
