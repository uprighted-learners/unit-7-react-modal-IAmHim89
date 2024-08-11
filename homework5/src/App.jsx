import { useState } from 'react'
import Modal from './Components/Modal'

import './App.css'

function App() {
  const [modalState, setModalState] = useState(false)

  function handleClick(){
   if(modalState === true){
    setModalState(false)
   } else {
    setModalState(true)
   }
  }


  return (
    <>
      <main>
        <button onClick={handleClick}>Open Modal</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non alias cum. Ipsam rerum qui reprehenderit iusto unde beatae aut?</p>
        <Modal  modalState={modalState} handleClick={handleClick}/>
      </main>
    </>
  )
}

export default App
