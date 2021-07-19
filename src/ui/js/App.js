import { render } from "react-dom";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Navbar from "./Navbar";
import VNav from "./VNav";
import Homepage1 from "./Homepage1";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";
import Contacts from "./Contacts";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
// import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [active, toggleActive] = useState("home");
  const [animate] = useState(true); //for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  const [showNav, toggleNav] = useState(true);
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0 && currPos.y > -100) {
        toggleActive("home");
        toggleAnimate1(true);
        toggleAnimate2(false);
      }
    },
    [],
    page1
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 400 && currPos.y >= -200) {
        toggleActive("profile");
        toggleAnimate2(true);
        toggleAnimate1(false);
        toggleAnimate3(false);
      }
    },
    [],
    page2
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 400 && currPos.y >= -100) {
        toggleActive("skills");
        toggleAnimate3(true);
        toggleAnimate2(false);
      }
      if (currPos.y <= -1) {
        toggleNav(false);
      }
      if (currPos.y > 0) {
        toggleNav(true);
      }
    },
    [],
    page3
  );

  return (
    <Router>
      <Navbar showNav={showNav} />
      <Switch>
        <Route path="/contacts">
          <Contacts toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/project">
          <Project
            toggleNav={toggleNav}
            showNav={showNav}
            toggleAnimate1={toggleAnimate1}
          />
        </Route>
        <Route path="/">
          <VNav
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            active={active}
            animate={animate}
          />
          <Homepage1
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            ref={page1}
            animate={animate1}
          />
          <Homepage2 ref={page2} animate={animate2} />
          <Homepage3 ref={page3} animate={animate3} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.getElementById("root"));
