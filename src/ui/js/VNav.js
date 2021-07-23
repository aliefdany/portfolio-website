import { useEffect, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

const VNav = ({ active, showNav, VNavArr }) => {
  const [classCache, setCache] = useState(VNavArr[0]);

  // ??
  useLayoutEffect(() => {
    handleActive();
  });

  useEffect(() => {
    pushVnav();
  }, [showNav]);

  function pushVnav() {
    const vnav = document.querySelector(".vnav");
    if (showNav) {
      vnav.classList.add("push-vnav");
    } else {
      vnav.classList.remove("push-vnav");
    }
  }

  function handleActive() {
    const elem = document.querySelector(`.${active}`);

    if (!(classCache == active)) {
      document.querySelector(`.${classCache}`).classList.remove("vnav-active");
    }

    elem.classList.add("vnav-active");
    setCache(active);
  }

  return (
    <CSSTransition in={true} timeout={400} classNames="animate-left" appear>
      <ul className="vnav">
        {VNavArr.map((item) => {
          return (
            <li key={item}>
              <Link className={item} to={item}>
                —{item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </CSSTransition>
  );
};

export default VNav;
