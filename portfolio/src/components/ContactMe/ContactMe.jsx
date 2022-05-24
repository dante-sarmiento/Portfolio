import React from 'react'
import './ContactME.css'

export const ContactMe = () => {
  return (
    <>
      <div className='container'>
        <div className='container' id='Contact'>
          <h1 className='titless'>Contact Me</h1>
        </div>
        <div className='container ambs'>
          <div className='container-sm der'>
            <h3><ion-icon name="mail-unread-outline"></ion-icon> dante.sarmientof5@gmail.com</h3>
            <h3><ion-icon name="call-outline"></ion-icon> 3816521029</h3>


          </div>
          <div className='container-sm izq'>
            <a className='aizq' href="https://www.linkedin.com/in/dante-sarmiento/"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className='aizq' href="https://github.com/dante-sarmiento"><ion-icon name="logo-github"></ion-icon></a>

          </div>
        </div>
      </div>
    </>
  )
}
