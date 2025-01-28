import React from 'react'
import "./BrandsSection.css"

export default function ContactUsSection() {

  return (
    <>
    <section className='brandsSectionContainer'>
      <h3 className='brandsTitle'>Brindandote una variedad de marcas</h3>
    <div className='brandsContainerGrid'>
      <img
      className='brandLogo'
      src="/Images/Brands/armaniExchange.png"
      />
       <img
        className='brandLogo'
      src="/Images/Brands/guess.jpg"
      />
       <img
        className='brandLogo'
      src="/Images/Brands/michaelKors.png"
      />
       <img
        className='brandLogo'
      src="/Images/Brands/oakley.jpg"
      />
       <img
        className='brandLogo'
      src="/Images/Brands/rayBan.png"
      />
       <img
        className='brandLogo'
      src="/Images/Brands/steveMadden.jpg"
      />
    </div>
    <div className='glassesImgGrid'>
    <img
      className='glassesExample'
      src="/Images/Brands/example1.jpg"
      />
       <img
        className='glassesExample'
      src="/Images/Brands/example3.jpg"
      />
         <img
        className='glassesExample'
      src="/Images/Brands/example4.jpg"
      />
    </div>
    </section>
    </>
  )
}
