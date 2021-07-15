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

const App = () => {
  const [active, toggleActive] = useState("home");
  const [animate] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  // const [visible, toggleVisible] = useState("visible");
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0 && currPos.y > -200) {
        toggleActive("home");
      }
    },
    [],
    page1
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 100 && currPos.y >= -100) {
        toggleActive("profile");
        toggleAnimate2(true);
      }
    },
    [],
    page2
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 100) {
        toggleActive("skills");
        toggleAnimate3(true);
      }
    },
    [],
    page3
  );

  return (
    <Router>
      <Switch>
        <Route path="/contacts">
          <Contacts animate={animate} />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails />
        </Route>
        <Route path="/project">
          <Project animate={animate} />
        </Route>
        <Route path="/">
          <VNav active={active} />
          <Navbar />
          <Homepage1 ref={page1} animate={animate} />
          <Homepage2 ref={page2} animate={animate2} />
          <Homepage3 ref={page3} animate={animate3} />
        </Route>
      </Switch>
    </Router>
  );
};
render(<App />, document.getElementById("root"));
