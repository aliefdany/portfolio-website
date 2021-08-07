import { useState, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";

import imported from "react-imported-component"; //eslint-disable-line
import { Helmet } from "react-helmet";
import BrowsersHeight from "./utils/BrowsersHeight";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import { useLocation } from "react-router-dom";

const Homepage = imported(() => import("./page/Homepage"));
const Project = imported(() => import("./page/Project"));
const Contacts = imported(() => import("./page/Contacts"));

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const App = () => {
  const path = usePathname();
  const [active, toggleActive] = useState(path.replace("/", "")); // for VNAV
  const [showNav, toggleNav] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);

  const browserHeight = window.innerHeight;
  console.log(browserHeight);

  function handleActiveRoute() {
    if (path == "/") {
      toggleActive("intro");
    } else {
      toggleActive(path.replace("/", ""));
    }
  }

  useLayoutEffect(() => {
    handleActiveRoute();
  }, [path]);

  return (
    <BrowsersHeight.Provider value={browserHeight}>
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
    </BrowsersHeight.Provider>
  );
};

export default App;
