import { Fragment, useState, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Helmet } from "react-helmet";
import BrowsersHeight from "./utils/BrowsersHeight";
import ThemeMiddle from "./utils/ThemeMiddle";

import Homepage from "./page/Homepage";
import Project from "./page/Project";
import Contacts from "./page/Contacts";
import NotFound from "./page/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import { useLocation } from "react-router-dom";
import EmailForm from "./layout/EmailForm";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const App = () => {
  const routes = ["/", "/contacts", "/project"];
  let path = usePathname();

  if (!routes.includes(path)) {
    path = "/notfound";
  }

  const [active, toggleActive] = useState(
    path.replace("/", `${path.length == 1 ? "intro" : ""}`)
  ); // for VNAV
  const [showNav, toggleNav] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  const [currentlyLightTheme, toggle] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  const browserHeight = window.innerHeight;
  function handleActiveRoute() {
    if (path == "/") {
      toggleActive("intro");
    } else if (path == "/contacts" || path == "/project") {
      toggleActive(path.replace("/", ""));
    } else {
      toggleActive("notfound");
    }
  }

  useLayoutEffect(() => {
    handleActiveRoute();
  }, [path]);

  return (
    <BrowsersHeight.Provider value={browserHeight}>
      <ThemeMiddle currentlyLightTheme={currentlyLightTheme} toggle={toggle} />
      <Navbar
        showNav={showNav}
        toggleActive={toggleActive}
        currentlyLightTheme={currentlyLightTheme}
      />
      <Switch>
        <Route
          path="/contacts"
          exact={true}
          render={() => {
            return (
              <Fragment>
                <Helmet defaultTitle="Alief Dany | Contacts 📞">
                  <meta charSet="utf-8" />
                </Helmet>
                <Contacts
                  toggleNav={toggleNav}
                  showNav={showNav}
                  active={active}
                  currentlyLightTheme={currentlyLightTheme}
                />
              </Fragment>
            );
          }}
        />
        <Route
          path="/project"
          exact={true}
          render={() => {
            return (
              <Fragment>
                <Helmet defaultTitle="Alief Dany | Projects 👨‍💻">
                  <meta charSet="utf-8" />
                </Helmet>
                <Project
                  toggleNav={toggleNav}
                  showNav={showNav}
                  active={active}
                  currentlyLightTheme={currentlyLightTheme}
                />
              </Fragment>
            );
          }}
        />
        <Route path="/" exact={true}>
          <Helmet defaultTitle="Alief Dany | Home 🏠">
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
            currentlyLightTheme={currentlyLightTheme}
          />
          <EmailForm currentlyLightTheme={currentlyLightTheme} />
        </Route>
        <Route
          render={(staticContext) => {
            if (staticContext) {
              staticContext.notfound = true;
            }
            return (
              <Fragment>
                <Helmet defaultTitle="Alief Dany | 404 🚨">
                  <meta charSet="utf-8" />
                </Helmet>
                <NotFound
                  toggleNav={toggleNav}
                  showNav={showNav}
                  active={active}
                  currentlyLightTheme={currentlyLightTheme}
                  toggleActive={toggleActive}
                />
              </Fragment>
            );
          }}
        />
      </Switch>
      <Footer />
    </BrowsersHeight.Provider>
  );
};

export default App;
