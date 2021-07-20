import { useLayoutEffect, useState } from "react";
// import { Link, HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

const VNav = ({ active, animate }) => {
  const [classCache, setCache] = useState("home");

  // ??
  useLayoutEffect(() => {
    handleActive();
  });

  function handleActive() {
    const elem = document.querySelector(`.${active}`);

    if (!(classCache == active)) {
      document.querySelector(`.${classCache}`).classList.remove("vnav-active");
    }

    elem.classList.add("vnav-active");
    setCache(active);
  }

  return (
    <CSSTransition in={animate} timeout={400} classNames="animate-left" appear>
      <ul className="vnav">
        <li>
          <Link className="home" to="home">
            —Home
          </Link>
        </li>
        <li>
          <Link className="profile" to="profile">
            —Profile
          </Link>
        </li>
        <li>
          <Link className="skills" to="skills">
            —Skills
          </Link>
        </li>
      </ul>
    </CSSTransition>
  );
};

export default VNav;
