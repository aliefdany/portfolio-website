import { Fragment, useState, useLayoutEffect, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { lazy, LazyBoundary } from "react-imported-component";

import { Helmet } from "react-helmet";
import BrowsersHeight from "./utils/BrowsersHeight";
import ThemeMiddle from "./utils/ThemeMiddle";

import Navbar from "./layout/Navbar";
const Homepage = lazy(() => import("./page/Homepage"));
const Project = lazy(() => import("./page/Project"));
const Contacts = lazy(() => import("./page/Contacts"));
const NotFound = lazy(() => import("./page/NotFound"));
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
  const [viewportFixed, setViewportFixed] = useState(false);
  const [currentlyLightTheme, toggle] = useState(true);
  const [browserHeight, setBrowserHeight] = useState(0);

  function handleActiveRoute() {
    if (path == "/") {
      toggleActive("intro");
    } else if (path == "/contacts" || path == "/project") {
      toggleActive(path.replace("/", ""));
    } else {
      toggleActive("notfound");
    }
  }

  useEffect(() => {
    setBrowserHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    toggle(window.matchMedia("(prefers-color-scheme: light)").matches);
  }, []);

  useEffect(() => {
    if (!viewportFixed) {
      document
        .querySelector(":root")
        .style.setProperty("--vh", window.innerHeight / 100 + "px");
      setViewportFixed(true);
    }
  }, []);

  useLayoutEffect(() => {
    handleActiveRoute();
  }, [path]);

  return (
    <LazyBoundary
      fallback={
        <div
          style={{
            width: "99%",
            height: "calc(100 * var(--vh))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: currentlyLightTheme
                ? "hsl(48, 12%, 25%)"
                : "hsl(46, 25%, 83%)",
            }}
            className="loader-text animate__animated animate__pulse animate__infinite animate__slow"
          >
            Please Wait{" "}
            <span role="img" aria-label="coffee emoji">
              ☕
            </span>
          </div>
        </div>
      }
    >
      <BrowsersHeight.Provider value={browserHeight}>
        <ThemeMiddle
          currentlyLightTheme={currentlyLightTheme}
          toggle={toggle}
        />
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
                  <Helmet defaultTitle="Alief Dany | Contacts 📲">
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
            render={(staticContext) => {
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
                    staticContext={staticContext.staticContext}
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
          </Route>
          <Route
            render={(staticContext) => {
              if (staticContext) {
                staticContext.notfound = true;
              }
              return (
                <Fragment>
                  <Helmet defaultTitle="Alief Dany | 404 👽">
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
        <EmailForm currentlyLightTheme={currentlyLightTheme} />
        <Footer />
      </BrowsersHeight.Provider>
    </LazyBoundary>
  );
};

export default App;
