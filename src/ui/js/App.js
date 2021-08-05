import { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";

import imported from "react-imported-component"; //eslint-disable-line
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";

const ProjectMiddle = imported(() => import("./ProjectMiddle"));
const Contacts = imported(() => import("./Contacts"));
const ProjectDetails = imported(() => import("./ProjectDetails"));

const App = () => {
  const [showNav, toggleNav] = useState(true);
  const [active, toggleActive] = useState("intro"); // for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);

  return (
    <Fragment>
      <Navbar showNav={showNav} toggleActive={toggleActive} />
      <Switch>
        <Route path="/contacts">
          <Helmet defaultTitle="Alief Dany | Contacts">
            <meta charSet="utf-8" />
          </Helmet>
          <Contacts toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails
            toggleNav={toggleNav}
            showNav={showNav}
            active={active}
          />
        </Route>
        <Route path="/project">
          <Helmet defaultTitle="Alief Dany | Projects">
            <meta charSet="utf-8" />
          </Helmet>
          <ProjectMiddle toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/">
          <Helmet defaultTitle="Alief Dany | Portfolio">
            <meta charSet="utf-8" />
          </Helmet>
          <Homepage
            animate1={animate1}
            animate2={animate2}
            animate3={animate3}
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            toggleNav={toggleNav}
            showNav={showNav}
          />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
