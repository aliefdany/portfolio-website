import { Fragment, useState, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";

import imported from "react-imported-component"; //eslint-disable-line
import { Helmet } from "react-helmet";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Homepage from "./page/Homepage";

import { useLocation } from "react-router-dom";

const Project = imported(() => import("./utils/ProjectMiddle"));
const Contacts = imported(() => import("./page/Contacts"));

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const App = () => {
  const [showNav, toggleNav] = useState(true);
  const [active, toggleActive] = useState("intro"); // for VNAV
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);

  const path = usePathname();

  useLayoutEffect(() => {
    if (path == "/") {
      toggleActive("intro");
    } else {
      toggleActive(path.replace("/", ""));
    }
  }, [path]);

  return (
    <Fragment>
      <Navbar showNav={showNav} toggleActive={toggleActive} />
      <Switch>
        <Route path="/contacts">
          <Helmet defaultTitle="Alief Dany | Contacts">
            <meta charSet="utf-8" />
          </Helmet>
          <Contacts toggleNav={toggleNav} showNav={showNav} active={active} />
        </Route>
        <Route path="/project">
          <Helmet defaultTitle="Alief Dany | Projects">
            <meta charSet="utf-8" />
          </Helmet>
          <Project toggleNav={toggleNav} showNav={showNav} active={active} />
        </Route>
        <Route path="/">
          <Helmet defaultTitle="Alief Dany | Portfolio">
            <meta charSet="utf-8" />
          </Helmet>
          <Homepage
            animate2={animate2}
            animate3={animate3}
            toggleActive={toggleActive}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            toggleNav={toggleNav}
            showNav={showNav}
            active={active}
          />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
