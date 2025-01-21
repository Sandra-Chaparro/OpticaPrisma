import React from 'react'
import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="ServicesSectionContainer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
        className='.serviceCardImg'
          src="/Images/eyeExam.jpg"
          alt="Examen de la vista en paciente"
        />
        <h2>Examen de la vista</h2>
      </div>
      </section>
  )
}


