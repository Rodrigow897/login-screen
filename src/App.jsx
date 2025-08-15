import Logo from '../public/Logo.svg'
import LogoDireito from '../public/login-illustrator.svg'
import LogoEmail from '../public/logo-email.svg'
import LogoPassword from '../public/logo-password.svg'
import Button from './components/login-button.jsx'
import './App.css'
import InputBox from './components/input-box.jsx'

import React from 'react'

const App = () => (
  <div className='container'>
    <div className="lado-esquerdo">
      <img id='logo' src={Logo} alt="foto da logo" />
      <h1>login into your account</h1>

      <form onSubmit={handleSubmit}>
        <InputBox
          className = "input-box1"
          subtitle = "Email Adress"
          type = "text"
          placeholder = "alex@gmail.com"
          id = "logo-email"
          src = {LogoEmail}
          alt = "logo email"
        />

        <InputBox
          className = "input-box2"
          subtitle = "Password"
          type = "password"
          placeholder = "Enter your password"
          id = "logo-password"
          src = {LogoPassword}
          alt = "logo password"
        />

        <a href="" className='link'>Forgot Password?</a>

        <Button 
          className = "buttonLogin"
          title = "Login Now"
        />
      </form>

      <div class="divider">
        <span>OR</span>
      </div>

      <Button 
        className = "buttonSignup"
        title = "Signup Now"
      />

    </div>

    <div className="lado-direito">
      <img src={LogoDireito} alt="foto logo" />
    </div>
  </div>
)

export default App
