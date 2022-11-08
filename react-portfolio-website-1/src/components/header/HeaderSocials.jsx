import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaKaggle } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christopher-glinka-4b5b7b1a1/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/CGlinka95" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://www.kaggle.com/christopherglinka" target="_blank" rel='noreferrer'><FaKaggle /></a>
    </div>
  )
}

export default HeaderSocials