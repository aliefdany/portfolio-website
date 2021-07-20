import { render } from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            // toggleAnimate1={toggleAnimate1}
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
            toggleAnimate2={toggleAnimate2}
            animate={animate1}
          />
          <Homepage2
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            animate={animate2}
          />
          <Homepage3
            toggleNav={toggleNav}
            toggleActive={toggleActive}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            animate={animate3}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.getElementById("root"));
