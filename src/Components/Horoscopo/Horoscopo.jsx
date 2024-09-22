import React from 'react'
import './styles.css'

const Horoscopo = ({ sendData }) => {
  if (!sendData) {
    return <p>No hay datos para mostrar.</p>;
  }

  return (
    <>
      <div className='cardHoroscopo'>
        {/* <pre>{JSON.stringify(sendData, null, 2)}</pre> Muestra el objeto JSON */}
        <h3>Tu signo zodiacal: {sendData.zodiacal}</h3>
        <p>Horoscopo: {sendData.horoscopo}</p>
      </div>
    </>
  )
}

export default Horoscopo