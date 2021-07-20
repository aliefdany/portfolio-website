import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import VNav from "./VNav";
import Contacts from "./Contacts";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";

const App = () => {
  const [showNav, toggleNav] = useState(true);
  const [active, toggleActive] = useState("home"); // for VNAV
  const [animate] = useState(true); //for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);

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
          <Project toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/">
          <VNav active={active} animate={animate} />
          <Homepage
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            toggleNav={toggleNav}
            animate1={animate1}
            animate2={animate2}
            animate3={animate3}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.getElementById("root"));
