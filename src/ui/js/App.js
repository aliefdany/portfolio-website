import { Fragment, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import { CSSTransition } from "react-transition-group";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Contacts from "./Contacts";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [showNav, toggleNav] = useState(false);
  const [active, toggleActive] = useState("intro"); // for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  const [showLoader, setLoader] = useState(true);
  const [halfHeight, setHalfHeight] = useState(0);

  const [isImageReady, setReady] = useState(false);
  const fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  useEffect(() => {
    setHalfHeight(window.innerHeight * 0.5);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4200);
  }, []);

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setReady(true);
    };
    img.src =
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/my-potrait_bDJvstrU0.png?updatedAt=1626881586779&ik-s=fa0534ddb44947d4142e421aab1bf6d9e711b24e"; // by setting an src, you trigger browser download
  }, []);

  useEffect(() => {
    if (!isLoading) {
      toggleNav(true);
    }
  }, [isLoading]);

  if (isLoading || !isImageReady) {
    return (
      <CSSTransition in={showLoader} timeout={400} classNames="loader" appear>
        <div className="loader-container">
          <Loader
            type="MutatingDots"
            color="#3C8678"
            secondaryColor="#9A947C"
            height={90}
            width={90}
            timeout={5000}
          />
          <div className="loader-text animate__animated animate__pulse animate__infinite animate__slow">
            Hey, get your{" "}
            <span role="img" aria-label="coffee emoji">
              ☕
            </span>
          </div>
        </div>
      </CSSTransition>
    );
  }

  return (
    <Fragment>
      <Navbar showNav={showNav} toggleActive={toggleActive} />
      <Switch>
        <Route path="/contacts">
          <Contacts
            toggleNav={toggleNav}
            toggleActive={toggleActive}
            active={active}
            showNav={showNav}
          />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails
            toggleNav={toggleNav}
            showNav={showNav}
            active={active}
          />
        </Route>
        <Route path="/project">
          <Project toggleNav={toggleNav} showNav={showNav} active={active} />
        </Route>
        <Route path="/">
          <Homepage
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            toggleNav={toggleNav}
            animate1={animate1}
            animate2={animate2}
            animate3={animate3}
            halfHeight={halfHeight}
            active={active}
            showNav={showNav}
          />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
