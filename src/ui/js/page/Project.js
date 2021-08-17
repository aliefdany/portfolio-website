import { Fragment, useState, useRef, useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import VNav from "../layout/VNav";
import BrowsersHeight from "../utils/BrowsersHeight";
import axios from "axios";
import { ProjectBG } from "../illustration/SVG";

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
  const project = useRef();
  const browserHalfHeight = useContext(BrowsersHeight) * 0.6;

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
        <ProjectBG />
        <div className="homepage-content project">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="project-text">
              <h4>MY WORK</h4>
              <h1>Projects</h1>
              <p>
                By the time you end up on this page, i’ve done 3 project. 2 of
                them is individual project and 1 is a team project. This website
                is one of my individual project. Checkout my projects on the
                right side of this page and share your thought!
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
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
    </Fragment>
  );
};

Project.fetchProjects = () => {
  return axios.get("https://aliefdany.me/api/project").then((res) => {
    return res.data;
  });
};

export default Project;
