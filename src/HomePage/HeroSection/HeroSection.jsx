import React from 'react'
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero">
    <div className="hero-image">
      <img
        src="/Images/heroimg.jpg"
        alt="A professional web designer working on a website"
        className="w-full h-auto"
      />
    </div>
    <div className="hero-text ">
      <h1 className="heroh1 hero-h1h2">
      Optometría general y pediátrica.
      </h1>
      <h2 className=" heroh2 hero-h1h2">
        <span>
        Localiza tu optica! Contamos con 2 sucursales.
        </span>
        <span>
        Visítanos y descubre la claridad que tus ojos merecen.
        </span>
      </h2>
     
      <p className="hero-p">Optica prisma te ofrece lentes graduados y de contacto, <br></br>examen de la vista, y lentes de sol. </p>
      
      <a href="/contacto" className="quote-link">Contactanos ahora!</a>

    </div>
  </div>
  )
}
