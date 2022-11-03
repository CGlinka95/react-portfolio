import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/selfie.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Christopher Glinka</h1>
        <h5 className='text-light'>Jr. Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="Photo of me, the creator" title='Photo of me, the creator' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header