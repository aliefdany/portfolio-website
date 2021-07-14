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
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y == 0) {
        toggleActive("home");
      }

      // console.log(currPos.y);
    },
    [],
    page1
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0 && currPos.y > -50) {
        toggleActive("profile");
      }

      // console.log(currPos.y);
    },
    [],
    page2
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 0) {
        toggleActive("skills");
      }

      // console.log(currPos.y);
    },
    [],
    page3
  );

  return (
    <Router>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Switch>
        <Route path="/project/:id">
          <ProjectDetails />
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/">
          <VNav active={active} />
          <Navbar />
          <Homepage1 ref={page1} />
          <Homepage2 ref={page2} />
          <Homepage3 ref={page3} />
        </Route>
      </Switch>
    </Router>
  );
};
render(<App />, document.getElementById("root"));
