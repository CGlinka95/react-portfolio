import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me, the creator" title="Me, the creator" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Technical Education</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Employment</h5>
              <small>Director of Education at Code Ninjas</small>
              <br />
              <small>October 2021 - Present</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            An aspiring and enthusiastic Software Developer with 3 years of
            technical education in NAIT's DMIT program. A graduate of Concordia
            University of Edmonton with a major in English and a minor in
            Psychology but decided that IT is ultimately where he belongs and
            flourishes due to a life-long interest and fascination with
            technology. Has recently, due to his work at Code Ninjas, discovered
            a passion for teaching kids how to code and make their own
            videogames; while also giving back to the community in ways that
            motivate and foster the same passion for technology and STEM that he
            feels.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
