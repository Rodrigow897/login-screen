import Logo from '../public/Logo.svg'
import LogoDireito from '../public/login-illustrator.svg'
import LogoEmail from '../public/logo-email.svg'
import './App.css'

import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <div className="lado-esquerdo">
        <img id='logo' src= {Logo} alt="foto da logo" />
        <h1>login into your account</h1>

        <div className="input-box">
          <label>Email Adress</label>
          <div className="inner-box">
            <input className='input' type="text" placeholder='alex@email.com' />
            <div id='logo-email'><img src={LogoEmail} alt="logo email" /></div>
          </div>
        </div>
        
      </div>

      <div className="lado-direito">
        <img src={LogoDireito} alt="foto logo" />
      </div>
    </div>
  )
}

export default App
