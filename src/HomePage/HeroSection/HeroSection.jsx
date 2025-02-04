import React from 'react'
import { Link } from 'react-router-dom';
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <>
      <div className='heroh1Container'>
        <h1 className="heroh1">
          Optometría general y pediátrica.
        </h1>
      </div>
      <div className="hero">
        <div className='heroContainer'>
          <div className='leftHeroSection'>
            <div className="hero-image">
                <img
                  src="/Images/heroImg.jpg"
                  alt="Foto de optometristas de la optica"
                />
            </div>
          </div>

          <div className='rightHeroSection'>
            <h2 className="heroh2">
              <span>
                Localiza tu optica! <br></br>Contamos con 2 sucursales.
              </span>
            </h2>  
            <div className='map-img'>
              <img
                src="/Images/opticaHero.jpg"
                alt="A professional web designer working on a website"
                className="rounded-lg"
              />
            </div> 
            <div className='hero-buttonContainer'>
            <Link to="/sucursales" className="quote-link">Contactanos ahora!</Link>
              
            </div>
          </div>

      </div>
    
    </div>
  </>
  )
}
