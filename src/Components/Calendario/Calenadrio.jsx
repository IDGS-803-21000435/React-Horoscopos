import React, { useState } from 'react'
import './styles.css'

function getZodiacSign(day, month) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Tauro';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Géminis';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cáncer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitario';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricornio';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Acuario';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Piscis';
  return 'Desconocido';
}

function getHoroscope(sign) {
  const horoscopes = {
    Aries: "Hoy es un buen día para comenzar nuevos proyectos.",
    Tauro: "Tu paciencia será recompensada hoy.",
    Géminis: "La curiosidad te llevará a descubrir algo nuevo.",
    Cáncer: "Es un buen momento para cuidar de ti mismo.",
    Leo: "Hoy brillarás y llamarás la atención de los demás.",
    Virgo: "Los detalles son importantes, asegúrate de prestarles atención.",
    Libra: "Busca el equilibrio en tus relaciones.",
    Escorpio: "Un misterio puede revelarse hoy.",
    Sagitario: "La aventura está llamando, ¡sal y explora!",
    Capricornio: "Tu disciplina te llevará al éxito.",
    Acuario: "El cambio está en el aire, abraza lo nuevo.",
    Piscis: "La creatividad fluirá y te ayudará a resolver problemas.",
    Desconocido: "Introduce una fecha válida para ver tu horóscopo."
  };
  return horoscopes[sign];
}

const Calenadrio = ({ sendData }) => {
  const [birthDate, setBirthDate] = useState('');
  
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const day = selectedDate.getUTCDate();
    const month = selectedDate.getUTCMonth() + 1; // Meses en JS van de 0 a 11
    const sign = getZodiacSign(day, month);
    const newHoroscope = getHoroscope(sign);    
    const data = {
      zodiacal: sign,
      horoscopo: newHoroscope
    }
    sendData(data)
  };

  return (
    <>
      <div className='cardCalendario'>
        <label htmlFor="fecha">Ingresa tu fecha de nacimiento</label>
        <input type="date" id="fecha" value={birthDate} onChange={(e) => {
          setBirthDate(e.target.value);
          handleDateChange(e);
        }}/>
      </div>
    </>
  )
}

export default Calenadrio