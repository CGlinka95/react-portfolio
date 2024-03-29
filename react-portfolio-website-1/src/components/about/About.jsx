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
              <small>Summer Camp Director & Supervisor</small>
              <br />
              <small>October 2021 - September 2023</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed Projects</small>
            </article>
          </div>
          <p>
            A motivated Software Developer with a lifelong passion for
            technology and a strong desire for continuous learning. I started my
            career in the retail and services industry and now after three years
            of technical education from NAIT's Digital Media and IT program, I
            am applying my skills where I can, to make a difference. My recent
            role at Code Ninjas sparked a newfound love for teaching coding to
            kids and this led me to start and head a weekly teen night providing
            a space for like-minded individuals to connect, explore interests,
            and learn together.
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
