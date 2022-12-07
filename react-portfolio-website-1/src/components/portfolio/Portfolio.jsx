import React from 'react'
import "./portfolio.css"
import REACT_IMG from "../../assets/react-icon.webp"
import NET_CORE_IMG from "../../assets/csharp-dotnet.webp"
import RAPID_API_IMG from "../../assets/rapid-api.webp"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={REACT_IMG} alt="React logo to reference my react.js website project" title="React logo to reference my react.js website project"/>
          </div>
          <h3>The Code For This Website</h3>
          <a href="https://github.com/CGlinka95/react-portfolio" className='btn btn-primary' target="_blank" rel='noreferrer'>GitHub</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NET_CORE_IMG} alt=".NET Core logo to reference my web app project done in .NET" title=".NET Core logo to reference my web app project done in .NET"/>
          </div>
          <h3>eBike Web App - School Project</h3>
          <a href="https://github.com/CGlinka95/eBike-WebApp" className='btn' target="_blank" rel='noreferrer'>GitHub</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RAPID_API_IMG} alt="Rapid API logo to reference where I got the API from to make this project" title="Rapid API logo to reference where I got the API from to make this project"/>
          </div>
          <h3>Sudoku Solver API Project</h3>
          <a href="https://github.com/CGlinka95/CGs-Sudoku-Solver" className='btn btn-primary' target="_blank" rel='noreferrer'>GitHub</a>
          <a href="https://www.youtube.com/watch?v=t9TsO9BWpsI&ab_channel=CGlinkaDesigns" className='btn btn-secondary' target="_blank" rel='noreferrer'>Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio