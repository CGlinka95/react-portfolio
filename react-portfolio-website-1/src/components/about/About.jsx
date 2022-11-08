import React from 'react'
import "./about.css"
import ME from "../../assets/me.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="Me, the creator" title="Me, the creator" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Technical Education</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Employment</h5>
              <small>Director of Education at Code Ninjas</small>
              <br />
              <small>October 2021 - Present</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>An aspiring and enthusiastic Fullstack Developer with 3 years of technical education at NAIT’s DMIT program. A natural team player that can also flourish in a team leadership role. Known for his charisma, reliability, flexibility, adaptability, consistency, and ability to effectively delegate tasks and problem-solve on the spot.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About