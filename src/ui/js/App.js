import { useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import VNav from "./VNav";
import Contacts from "./Contacts";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import { CSSTransition } from "react-transition-group";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [showNav, toggleNav] = useState(false);
  const [active, toggleActive] = useState("home"); // for VNAV
  const [animate] = useState(true); //for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);
  const [showLoader, setLoader] = useState(true);
  const halfHeight = window.innerHeight * 0.5;

  const [isImageReady, setReady] = useState(false);
  const fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

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
            Hey, take your{" "}
            <span role="img" aria-label="coffee emoji">
              ☕
            </span>
          </div>
        </div>
      </CSSTransition>
    );
  }

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
            halfHeight={halfHeight}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.getElementById("root"));
