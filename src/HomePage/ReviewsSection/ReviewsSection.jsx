import React from 'react'
import "./ReviewsSection.css";

export default function ReviewsSection() {
  const reviews=[
    {
      author: "Susy Holguín",
      review: "Excelente servicio, buen trato y profesionalismo. La mejor calidad en sus productos. 🙌",
    },
    {
      author: "Judith Gamboa Peinado",
      review: "Muy buen servicio, el personal es muy atento y calificado. Hay opciones para todos los presupuestos, además de que tienen los lentes rápido, también los instrumentos que utilizan son de los más actuales.",
    },
    {
      author: "Fatima Márquez",
      review: "Excelente atención y amabilidad por parte de los optometristas ✨✨ Me gusto mucho que me ofrecieron una gran variedad  en armazones como micas.",
    },
  ]
  return (
    <>
      <section className='ReviewsSection'>Opiniones de nuestros clientes
       
      <div className='reviewsContainer'>
        {reviews.map((review, index) => (
          <div key={index} className='reviewsCard'>
             <img
        className='reviewsStarsImg'
          src="/Images/5star.png"
          alt= "iamgen de 5 estrellas para mostrar comentarios"
        />
            <p className='author'>{review.author}</p>
            <p className='review'>{review.review}</p>
          </div>
        ))}
      </div>
      </section>
    </>
  )
}
