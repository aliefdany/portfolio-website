import { Fragment, useState, useRef, useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import VNav from "../layout/VNav";
import BrowsersHeight from "../utils/BrowsersHeight";
import axios from "axios";
import { ProjectBG } from "../illustration/SVG";
import { Link as ScrollLink } from "react-scroll";

import ProjectCard from "../layout/ProjectCard";

const Project = ({
  toggleNav,
  showNav,
  active,
  staticContext,
  currentlyLightTheme,
}) => {
  const [projects, setProject] = useState(
    staticContext ? staticContext.data : []
  );
  const [ssr, setSSR] = useState(true);
  const [animate, setAnimate] = useState(false);
  const project = useRef();
  const browserHalfHeight = useContext(BrowsersHeight) * 0.6;
  const linkBg = {
    background: currentlyLightTheme && !ssr ? "hsl(169, 38%, 38%)" : "#012a1c",
  };

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= -browserHalfHeight) {
        toggleNav(false);
      } else {
        toggleNav(true);
      }
    },
    [browserHalfHeight],
    project
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  }, []);

  useEffect(() => {
    (async () => {
      if (!projects.length) {
        if (window.initial_state) {
          setProject(window.initial_state);
        } else {
          setProject(await Project.fetchProjects());
        }
      }
    })();
  }, []);

  useEffect(() => {
    setSSR(false);
  });

  if (active != "project") {
    return null;
  }

  return (
    <Fragment>
      <VNav
        // handling browser's back button
        active={active}
        showNav={showNav}
        VNavArr={["project"]}
      />

      <div ref={project} className="separator" id="project"></div>
      <div className="page project">
        <ScrollToTopOnMount />
        <ProjectBG animate={animate} />
        <div className="content project">
          <CSSTransition in={animate} timeout={1000} classNames="animate-left">
            <div className="project-text">
              <h4>MY WORK</h4>
              <h1>
                Projects
                <span role="img" aria-label="man working">
                  👨‍💻
                </span>
              </h1>
              <p>
                Frontend Web Development is a field that currently {"i'm"}{" "}
                focusing on. {"I'm"} always very excited to implement UI Design
                into a real Web Apps. Nevertheless, i do some Backend too, like
                making a REST API for CRUD with{" "}
                <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                  Node
                </a>{" "}
                and doing a sort of database stuff with{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MongoDB
                </a>
                .
              </p>
              <p>
                All of my project are available on my{" "}
                <a
                  href="https://www.github.com/aliefdany"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                . Some are finished and some are still in development. For
                Deployment,{" "}
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify
                </a>{" "}
                and{" "}
                <a
                  href="https://www.vercel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>{" "}
                is really a good platform, but i found that{" "}
                <a
                  href="https://pages.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Pages
                </a>{" "}
                is pretty cool. You can checkout my pages with links that i
                provided below! 👇
              </p>
            </div>
          </CSSTransition>
          <CSSTransition in={animate} timeout={1000} classNames="animate-left">
            <div className="cards">
              {projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    thumb={project.imageURL[0]}
                    preview={project.preview}
                    done={project.done}
                    repoLink={project.repoLink}
                    siteLink={project.siteLink}
                    tags={project.tags}
                    imageURL={project.imageURL}
                    currentlyLightTheme={currentlyLightTheme}
                  />
                );
              })}
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className="separator">
        <ScrollLink
          to="project"
          className="back-to-top button-like"
          style={linkBg}
        >
          Back To Top
        </ScrollLink>
      </div>
    </Fragment>
  );
};

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

Project.fetchProjects = () => {
  return axios.get("http://localhost:3000/api/project").then((res) => {
    return res.data;
  });
};

export default Project;
