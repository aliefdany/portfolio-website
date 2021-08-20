import { useRef, Fragment, useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import VNav from "../layout/VNav";
import BrowsersHeight from "../utils/BrowsersHeight";
import { ContactsBG } from "../illustration/SVG";
import { GitHub, Twitter, Instagram } from "../illustration/SVG";

const Contacts = ({ toggleNav, showNav, active, currentlyLightTheme }) => {
  const contacts = useRef();
  const browsersHeight = useContext(BrowsersHeight);
  const [ssr, setSSR] = useState(true);
  const [animate, setAnimate] = useState(false);

  let linkColor = {
    color:
      currentlyLightTheme && !ssr ? "hsl(48, 12%, 25%)" : "hsl(46, 25%, 83%)",
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 50);
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
    contacts
  );

  if (active != "contacts") {
    return null;
  }

  return (
    <Fragment>
      <VNav
        // handling browser's back button
        active={active}
        showNav={showNav}
        VNavArr={["contacts"]}
      />
      <div ref={contacts} className="separator" id="contacts"></div>
      <div className="page">
        <ScrollToTopOnMount />
        <ContactsBG animate={animate} />
        <div className="content">
          <CSSTransition in={animate} timeout={1000} classNames="animate-left">
            <div className="text">
              <h4>LETS CONNECT</h4>
              <h1>
                Find Me
                <span role="img" aria-label="contact me">
                  📲
                </span>
              </h1>
              <p>
                I’m so open for any critics and advise as it can help me solve
                any obtacles that i didn’t even notice at the first sight. So
                come on, find and reach me and share your thought! see you
                <span aria-label="hand-wave-icon" role="img">
                  👋
                </span>
              </p>
            </div>
          </CSSTransition>
          <CSSTransition in={animate} timeout={1000} classNames="animate-right">
            <div className="contacts-list">
              <div className="contacts-link">
                <GitHub currentlyLightTheme={currentlyLightTheme} ssr={ssr} />
                <a
                  href="https://github.com/aliefdany"
                  rel="noreferrer"
                  target="_blank"
                  style={linkColor}
                >
                  github.com/aliefdany
                  <div className="github-underline"></div>
                </a>
              </div>
              <div className="contacts-link">
                <Twitter />
                <a
                  href="https://twitter.com/aliefdany"
                  rel="noreferrer"
                  target="_blank"
                  style={linkColor}
                >
                  twitter.com/aliefdany
                  <div className="twt-underline"></div>
                </a>
              </div>
              <div className="contacts-link">
                <Instagram />
                <a
                  href="https://instagram.com/aliefdany"
                  rel="noreferrer"
                  target="_blank"
                  style={linkColor}
                >
                  instagram.com/aliefdany
                  <div className="cp-underline"></div>
                </a>
              </div>
            </div>
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

export default Contacts;
