import logo from './logo.svg';
import './App.css';
import ButtonCl from './Components/ButtonCl/ButtonCl'
import ButtonFc from './Components/ButtonFc/ButtonFc'
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import Name from './Components/Name/Name'
import React, { useState, useEffect } from 'react';

function App() {
  const [numero, setNumero] = useState(3)
  const [time, setTime] = useState("")
  useEffect(()=> {
    console.log('solo una vez');
  }, [])
  // Si quiero que aparezca una sola vez, se utilizan []

  const handleNumero = () => {
    setNumero(numero + 1)
    setTime(Date().toLocaleString())
  }
  // // componentWillMount(){
  // //   // va a suceder justo antes del primer montaje
  // // }
  // // componentDidMount(){
  // //   // Va a suceder justo despues del primer montaje. Por ejemplo: asincronía
  // // }

  // PROMSESA
  // const task = new Promise((resolve, reject)=> {
  //   // ... codigo asincronico, ej: fetch()
  //   resolve(true) // si se resolvió
  //   // reject(false) // si no se resolvió
  // })
  // task.then((res)=>{
  //   //... codigo necesario con "res"
  //   console.log("resuelta", res);
  //   // provoco un error
  //   throw new Error('status 500 (error provocado)')
  // }, (rej) => {
  //   console.log('rechazada', rej);
  // })// cuando task termine, vení y trabaja con lo que yo te diga
  // .catch((err)=>{
  //   console.log('hubo un error', err);
  // })// el cath es la forma de atajar errores

  // Map
  // Permite generar un nuevo array, tomando de base otro array
  
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer/>
      <header className="App-header">
        <p>Clickeaste: {numero}</p>
        <p>{time}</p> 
        <button onClick={handleNumero}>Clickéa</button>
        <Name nombre='AG'/>
        <ButtonFc text={'Soy el boton'} color={'red'} padding={'15px'}/> 
      </header>
    </div>
  );
}

export default App;
