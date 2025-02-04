import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./Sucursales.css"

export default function Contactanos() {
  return (
    <>
    <h1 className='SucursalesTitle'>Contamos con dos sucursales</h1>    
      <div className='SucursalesContainer'>

        <div className='sucursal1Container'>
        <p className='sucursalTitle'>Sucursal 1</p>

        <ul>
          <li><FaMapMarkerAlt className='icon' />Pedro de Lille #15 Plaza Prisma</li>
          <li>(Frente a la central camionera)</li>
          <li><FaPhone className='icon' />Telefono: 627 523 63 25</li>
        </ul>

        <img
        src="Images/suc1.jpg"
        className='suc1Img'
        />
        </div>
     
        <div className='sucursal2Container'>
        <p className='sucursalTitle'>Sucursal 2</p>
        <ul>
          <li><FaMapMarkerAlt className='icon' />Plaza Juan Rangel</li>
          <li>(Subiendo desnivel de AV. Juan Rangel)</li>
          <li><FaPhone className='icon'/>Telefono: 627 522 60 05</li>
              </ul>
        <img
        src="Images/suc2.jpg"
        className='suc2Img'
        />
        </div>

    </div>
    </>
  )
}


