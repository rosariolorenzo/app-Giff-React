import React, {useEffect ,useState} from 'react';
import './App.css';
import ListGif from './components/ListGifs'

/*use effect renderiza cuando comienza el componente*/


export default function App() {
 
  return (
    <div className="App">
      <section className="App-content">
       <ListGif keyword ='dog' />
       
      </section>
    </div>
  )
}

