import { render } from "react-dom";
import { useState, useRef, useLayoutEffect } from "react";
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

const App = () => {
  const [active, toggleActive] = useState("home");
  const [animate] = useState(true);
  const [animate1, toggleAnimate1] = useState(false);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  // const [visible, toggleVisible] = useState("visible");
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  console.log(animate2);

  useLayoutEffect(() => {
    toggleAnimate1(true);
  }, []);

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0 && currPos.y > -200) {
        toggleActive("home");
        toggleAnimate1(true);
        toggleAnimate2(false);
        toggleAnimate3(false);
      }
    },
    [],
    page1
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 200 && currPos.y >= -100) {
        toggleActive("profile");
        toggleAnimate1(false);
        toggleAnimate2(true);
        toggleAnimate3(false);
      }
    },
    [],
    page2
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 200) {
        toggleActive("skills");
        toggleAnimate1(false);
        toggleAnimate2(false);
        toggleAnimate3(true);
      }
    },
    [],
    page3
  );

  return (
    <Router>
      <Navbar toggleAnimate2={toggleAnimate2} toggleAnimate3={toggleAnimate3} />

      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/">
          <VNav active={active} animate={animate} />
          <Homepage1
            ref={page1}
            animate={animate1}
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
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
