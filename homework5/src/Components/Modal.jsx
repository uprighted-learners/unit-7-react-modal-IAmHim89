import React from 'react'


const Modal = (props) => {
  if(props.modalState === true) {
   return(
    <main className='modal-background'>
      <section className='modal-content'>
        <h3 >I am a Modal!</h3>
        <button onClick={props.handleClick}>Close Modal</button>
      </section>
    </main>
   ) 
  }
  return(
    <div style={{display: "none"}}></div>
  )
  
}

export default Modal