import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/personal-logo.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Christopher Glinka</h1>
        <h5 className="text-light">Software Developer | Hobbyist Tinkerer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My personal logo" title="My personal logo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
