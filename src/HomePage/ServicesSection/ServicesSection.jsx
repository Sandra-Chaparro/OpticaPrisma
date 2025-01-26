import React, { useRef } from "react";
import "./ServicesSection.css";

export default function ServicesSection() {
  const scrollContainer = useRef(null);

  const handleScroll = (direccion) =>{
    if(direccion == "left"){
      scrollContainer.current.scrollBy({left: -300, behavior: "smooth"})
    }
    else{
      scrollContainer.current.scrollBy({left: 300, behavior: "smooth"})
    }
  }

  const services = [
    {
      imgSrc: "/Images/eyeExam.jpg",
      title: "Examen de la Vista"
    },
    {
      imgSrc: "/Images/contacts.jpg",
      title: "Lentes de Contacto"
    },
    {
      imgSrc: "/Images/lenses.jpg",
      title: "Lentes graduados"
    },
    {
      imgSrc: "/Images/sunglasses.jpg",
      title: "Lentes de Sol"
    },
    {
      imgSrc: "/Images/kidsLenses.jpg",
      title: "Lentes para niños"
    },
    {
      imgSrc: "/Images/accesories.jpg",
      title: "Accesorios para Lentes"
    },
  ]

  return (
    <section className="ServicesSectionContainer">
      <h3 className="servicesTitle">Servicios y productos de optometria</h3>
       <button className="scroll-btn left-btn" onClick={() => handleScroll("left")}>←</button>
      <div className='gridContainer' ref={scrollContainer}>
        {services.map((service, index)=>(
          <div key={index} className='servicesGridCard'>
            <img
              src={service.imgSrc}
              alt={service.title}
              className='serviceCardImg '
            />
            <div className="service-card-text">
              <h2>
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn right-btn" onClick={() => handleScroll("right")}>→</button>
    </section>
  )
}


