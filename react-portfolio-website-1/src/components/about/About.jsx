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
              <small>11+ Completed Projects</small>
            </article>
          </div>
          <p>
            An aspiring and enthusiastic Software Developer with 3 years of
            technical education in NAIT’s DMIT program. He is a Concordia
            University of Edmonton BA graduate with a major in English and takes
            great pride in his ability to write. However, he decided that IT is
            where he belongs and flourishes due to a life-long passion for
            technology and learning. Due to his work at Code Ninjas, he has
            recently discovered a love of teaching kids how to code and
            volunteering for events that host local groups such as Big Brothers
            Big Sisters, Autism Edmonton, and Ukrainian Refugee fundraisers.
            Through Code Ninjas he also runs a weekly teen-night where they can
            have a space to interact and make friends with likeminded
            individuals of their own age and explore their interests and learn
            new things.
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
