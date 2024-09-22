import { useState } from 'react'
import './App.css'
import Calendario from'./Components/Calendario/Calenadrio'
import Horoscopo from './Components/Horoscopo/Horoscopo'

function App() {

  const [jsonData, setJsonData] = useState(null);

  const handleJsonData = (data) => {
    console.log("(APP) Datos recibidos del Calendario:", data);
    setJsonData(data); // Actualiza el estado con los datos recibidos

  };

  return (
    <>
      <h1>Horoscopos</h1>
      <div className='container'>
        <div className="card">
          <Calendario sendData={handleJsonData}/>
        </div>
        <div className="card">
          <Horoscopo sendData={jsonData}/>
        </div>
      </div>
      <p className="read-the-docs">
        IDGS903
      </p>
    </>
  )
}

export default App
