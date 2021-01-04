import React, { useEffect, useState } from "react";
import "./nav.styles.scss";
import logos from "../../utilities/logos";
import smileyLogo from "../../utilities/smiley-log.svg";

const Nav = () => {
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
    // ()=>window.removeEventListener('scroll');
  }, []);
  return (
    <div className={`nav ${scrollDown && "nav__scrollDown"}`}>
      <img
        src={logos.netflixLogo}
        alt="netflix-logo"
        className="netflix__logo"
      />
      <img src={smileyLogo} alt="smiley-logo" className="smiley__logo" />
    </div>
  );
};

export default Nav;
