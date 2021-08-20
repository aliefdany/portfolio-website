import { Fragment, useRef, useEffect, useContext, useState } from "react";
import VNav from "../layout/VNav";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import BrowsersHeight from "../utils/BrowsersHeight";

import { CSSTransition } from "react-transition-group";
import {
  Homepage1BG,
  Homepage2BG,
  Homepage3BG,
  SkillStack,
} from "../illustration/SVG";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Homepage = ({
  toggleActive,
  animate2,
  animate3,
  toggleNav,
  toggleAnimate2,
  toggleAnimate3,
  showNav,
  active,
  currentlyLightTheme,
}) => {
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  const browsersHalfHeight = useContext(BrowsersHeight) / 2;

  const [ssr, setSSR] = useState(true);
  const linkBg = {
    background: currentlyLightTheme && !ssr ? "hsl(169, 38%, 38%)" : "#012a1c",
  };

  useEffect(() => {
    setSSR(false);
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > -browsersHalfHeight) {
        toggleActive("intro");
      }
    },
    [browsersHalfHeight],
    page1
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= browsersHalfHeight && currPos.y >= -browsersHalfHeight) {
        toggleActive("education");
        toggleAnimate2(true);
      }
    },
    [browsersHalfHeight],
    page2
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= browsersHalfHeight && currPos.y >= -browsersHalfHeight) {
        toggleActive("experience");
        toggleAnimate3(true);
      }
      if (currPos.y <= 0) {
        toggleNav(false);
      } else {
        toggleNav(true);
      }
    },
    [browsersHalfHeight],
    page3
  );

  if (active == "contacts" || active == "project" || active == "notfound") {
    return null;
  }

  return (
    <Fragment>
      <VNav
        // handlin browser's back button
        active={active}
        showNav={showNav}
        VNavArr={["intro", "education", "experience"]}
      />
      <div ref={page1} className="separator first" id="intro"></div>
      <div className="page">
        <ScrollToTopOnMount />
        <Homepage1BG />
        <div className="content greeting">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="text">
              <h4>GREETINGS</h4>
              <h1>
                Hello, Folks
                <span role="img" aria-label="wave emoji">
                  👋
                </span>{" "}
                <br /> My Name is Alief Dany
              </h1>
              <p>
                {"I'm"} a{" "}
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Javascript
                </a>{" "}
                Developer that focused on building Web Apps with technology like{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React
                </a>{" "}
                ,{" "}
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                  Node
                </a>
                , and{" "}
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express
                </a>
                . Managing online data through the use of REST API and{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mongo
                </a>{" "}
                to provide smooth User Experience 💯
              </p>
              <ScrollLink
                to="education"
                onClick={() => {
                  toggleActive("education");
                }}
                className="button-like"
                style={linkBg}
              >
                My Profile
              </ScrollLink>
            </div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <img
              src="https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/my-potrait_bDJvstrU0.png?updatedAt=1626881586779&ik-s=fa0534ddb44947d4142e421aab1bf6d9e711b24e"
              alt="potrait of Alief Dany"
              className="alief-potrait"
              style={{
                filter: currentlyLightTheme
                  ? "none"
                  : "contrast(120%) brightness(80%)",
              }}
            />
          </CSSTransition>
        </div>
      </div>

      <div ref={page2} className="separator with-bg" id={"education"}></div>
      <div className="page">
        <Homepage2BG animate={animate2} />
        <div className="content">
          <CSSTransition
            in={animate2}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <img
              src="https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/logo-filkom-ub_LLoDkgTSZ.png?updatedAt=1626881666882&ik-s=f640f9a6fd519ed62923dabfddd8eb2e48e4c19a"
              alt="logo-filkom"
              className="logo-filkom"
            />
          </CSSTransition>
          <CSSTransition
            in={animate2}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <div className="text">
              <h4>ACADEMIC PROFILE</h4>
              <h1>
                Bachelor of Computer Science
                <span role="img" aria-label="tech emoji">
                  🎓
                </span>
              </h1>
              <p>
                Brawijaya University
                <br />
                Faculty of Computer Science <br /> Department of Information
                System <br />
                (2019 - Current)
              </p>
              <a
                href="https://filkom.ub.ac.id"
                target="_blank"
                rel="noreferrer"
                className="button-like"
                style={linkBg}
              >
                Visit Site
              </a>
            </div>
          </CSSTransition>
        </div>
      </div>

      <div ref={page3} className="separator with-bg"></div>
      <div className="page" id={"experience"}>
        <Homepage3BG animate={animate3} />
        <div className="content">
          <CSSTransition
            in={animate3}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="text">
              <h4>TECH & TOOLS</h4>
              <h1>
                Skill Stack
                <span role="img" aria-label="tech emoji">
                  🧰
                </span>
              </h1>
              <p>
                {"I've"} built some web apps with Frontend technology such as{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React
                </a>{" "}
                , HTML, and CSS. As well as Backend like{" "}
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                  Node.js
                </a>{" "}
                ,{" "}
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express
                </a>{" "}
                , and{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mongo
                </a>{" "}
                to create server and provide data to it.{" "}
                <a href="https://ubuntu.com/" target="_blank" rel="noreferrer">
                  Ubuntu
                </a>{" "}
                is my main Operating System and{" "}
                <a
                  href="https://www.gnu.org/software/bash/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bash
                </a>{" "}
                is my default shell
              </p>
              <p>
                Some tools helped me focus to the task that i want to accomplish
                such as{" "}
                <a href="https://prettier.io/" target="_blank" rel="noreferrer">
                  Prettier
                </a>{" "}
                ,{" "}
                <a href="https://eslint.org/" target="_blank" rel="noreferrer">
                  ESLint
                </a>{" "}
                ,{" "}
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  Babel
                </a>
                , and{" "}
                <a
                  href="https://v2.parceljs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Parcel
                </a>
                . {"I'm"} starting to use{" "}
                <a
                  href="https://webpack.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Webpack
                </a>{" "}
                too as {"it's"} required for some React SSR frameworks like{" "}
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  Next.js
                </a>
              </p>
              <Link
                to="/project"
                onClick={() => {
                  toggleActive("project");
                }}
                className="button-like"
                style={linkBg}
              >
                See My Project
              </Link>
            </div>
          </CSSTransition>
          <SkillStack animate={animate3} />
        </div>
      </div>
      <div className="separator">
        <ScrollLink
          to="intro"
          onClick={() => {
            toggleActive("intro");
          }}
          className="back-to-top button-like"
          style={linkBg}
        >
          Back To Top
        </ScrollLink>
      </div>
    </Fragment>
  );
};

export default Homepage;

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
