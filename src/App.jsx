import Button from './components/login-button.jsx'
import './App.css'
import InputBox from './components/input-box.jsx'

import React from 'react'

const App = () => (
  <div className='container'>
    <div className="lado-esquerdo">
      <img id='logo' src='../public/Logo.svg' alt="foto da logo" />
      <h1>login into your account</h1>

      <InputBox
        className = "input-box1"
        subtitle = "Email Adress"
        type = "text"
        placeholder = "alex@gmail.com"
        id = "logo-email"
        src = '../public/logo-email.svg'
        alt = "logo email"
      />

      <InputBox
        className = "input-box2"
        subtitle = "Password"
        type = "password"
        placeholder = "Enter your password"
        id = "logo-password"
        src = '../public/logo-password.svg'
        alt = "logo password"
      />

      <a href="" className='link'>Forgot Password?</a>

      <Button 
        className = "buttonLogin"
        title = "Login Now"
      />

      <div class="divider">
        <span>OR</span>
      </div>

      <Button 
        className = "buttonSignup"
        title = "Signup Now"
      />

    </div>

    <div className="lado-direito">
      <img src='../public/login-illustrator.svg' alt="foto logo" />
    </div>
  </div>
)

export default App
