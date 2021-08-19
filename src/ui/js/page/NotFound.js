import { useRef, Fragment, useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import VNav from "../layout/VNav";
import BrowsersHeight from "../utils/BrowsersHeight";
import { Astronauts } from "../illustration/SVG";
import { NotfoundBG } from "../illustration/SVG";
import { Link, Redirect } from "react-router-dom";

const NotFound = ({
  toggleNav,
  showNav,
  active,
  currentlyLightTheme,
  toggleActive,
}) => {
  const notfound = useRef();
  const browsersHeight = useContext(BrowsersHeight);
  const [ssr, setSSR] = useState(true);
  const [redirected, setRedirected] = useState(false);
  const [countDown, decrementCount] = useState(7);

  const linkBg = {
    background: currentlyLightTheme && !ssr ? "hsl(169, 38%, 38%)" : "#012a1c",
  };

  useEffect(() => {
    setTimeout(() => {
      decrementCount(countDown - 1);
    }, 1000);
  }, [countDown]);

  useEffect(() => {
    setTimeout(() => {
      setRedirected(true);
    }, 8000);
  }, []);

  useEffect(() => {
    setSSR(false);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= -browsersHeight / 20) {
        toggleNav(false);
      } else {
        toggleNav(true);
      }
    },
    [browsersHeight],
    notfound
  );

  if (active != "notfound") {
    return null;
  }

  if (redirected) {
    toggleActive("intro");
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <VNav
        // handling browser's back button
        active={active}
        showNav={showNav}
        VNavArr={["notfound"]}
      />
      <div ref={notfound} className="separator" id="notfound"></div>
      <div className="page">
        <ScrollToTopOnMount />
        <NotfoundBG />
        <div className="content not-found">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <Fragment>
              <Link
                to="/"
                onClick={() => {
                  toggleActive("intro");
                }}
                className="button-like"
                style={linkBg}
              >
                Go Back Home
              </Link>
              <p>
                {"Don't"} worry, these Astronauts will bring you home in{" "}
                <span>{countDown}</span>
              </p>
              <div className="text">
                <h4>404 - NOT FOUND</h4>
                <h1>
                  Oops, it seems like you lost in space
                  <span role="img" aria-label="emergency">
                    🚀
                  </span>
                </h1>
              </div>{" "}
              <Astronauts currentlyLightTheme={currentlyLightTheme} />
            </Fragment>
          </CSSTransition>
        </div>
      </div>
    </Fragment>
  );
};

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default NotFound;
