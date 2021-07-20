import { useLayoutEffect, useState } from "react";
import { Link, HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

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
    <CSSTransition
      in={animate}
      timeout={400}
      classNames="animate-left-delay"
      appear
    >
      <ul className="vnav">
        <li>
          <HashRouter hashType={"noslash"}>
            <Link className="home" to="home">
              —Home
            </Link>
          </HashRouter>
        </li>
        <li>
          <HashRouter hashType={"noslash"}>
            <Link className="profile" to="profile">
              —Profile
            </Link>
          </HashRouter>
        </li>
        <li>
          <HashRouter hashType={"noslash"}>
            <Link className="skills" to="skills">
              —Skills
            </Link>
          </HashRouter>
        </li>
      </ul>
    </CSSTransition>
  );
};

export default VNav;
