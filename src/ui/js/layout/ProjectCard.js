import { useState, useEffect } from "react";
import ProjectTags from "./ProjectTags";
import Modal from "./Modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CSSTransition } from "react-transition-group";
import { BiX } from "react-icons/bi";

const ProjectCard = ({
  title,
  thumb,
  preview,
  done,
  repoLink,
  siteLink,
  tags,
  imageURL,
  currentlyLightTheme,
}) => {
  let imgSelector = title.split(" ").join("-").toLowerCase();
  let btnSelector = `${imgSelector}-btn`;

  const [showModal, setModal] = useState(false);
  const images = imageURL.map((url) => {
    return {
      original: url,
      thumbnail: url,
    };
  });

  function toggleModal() {
    setModal(!showModal);
    offHover();
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  function onHover() {
    let img = document.getElementById(imgSelector);
    let previewButton = document.getElementById(btnSelector);
    if (!img.classList.length || !previewButton.classList.length) {
      img.classList.add("image-hover");
      previewButton.classList.add("button-hover");
    }
  }

  function offHover() {
    let img = document.getElementById(imgSelector);
    let previewButton = document.getElementById(btnSelector);
    img.classList.remove("image-hover");
    previewButton.classList.remove("button-hover");
  }

  return (
    <div className="project-card">
      <div className="project-preview">
        {/* eslint-disable-next-line */}
        <div
          role="button"
          tabIndex="0"
          onClick={toggleModal}
          className="project-img"
        >
          <img
            id={title.split(" ").join("-").toLowerCase()}
            onMouseEnter={() => {
              onHover(title);
            }}
            onMouseLeave={() => {
              offHover(title);
            }}
            src={thumb}
            alt="project-img"
          />
          <button id={btnSelector} onMouseEnter={onHover} onClick={toggleModal}>
            PREVIEW
          </button>
        </div>
        <div className="project-tags">
          {tags.map((tagObj) => {
            return (
              <ProjectTags
                key={tagObj.tag}
                tag={tagObj.tag}
                color={tagObj.color}
              />
            );
          })}
        </div>
      </div>
      <div className="project-caption">
        <h2>{title}</h2>
        <p>{preview}</p>
        {done && (
          <a
            className="button-like visit-site"
            href={siteLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: currentlyLightTheme
                ? "hsl(169, 38%, 38%)"
                : "#012a1c",
            }}
          >
            Visit Site
          </a>
        )}
        <a
          className="button-like visit-repo"
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          style={{
            background: currentlyLightTheme ? "hsl(169, 38%, 38%)" : "#012a1c",
          }}
        >
          Visit Repo
        </a>
      </div>
      {showModal ? (
        <Modal>
          {/* eslint-disable-next-line */}
          <div
            className="modal-bg"
            role="button"
            tabIndex="0"
            onClick={toggleModal}
          ></div>
          <CSSTransition in={true} timeout={400} classNames="show-modal" appear>
            <div className="modal">
              <BiX onClick={toggleModal} className="exit-icon" />
              <h1>{title}</h1>
              <p>PREVIEW</p>
              <div className="preview-slider">
                <ImageGallery
                  items={images}
                  autoPlay={true}
                  showPlayButton={false}
                />
              </div>
            </div>
          </CSSTransition>
        </Modal>
      ) : null}
    </div>
  );
};

export default ProjectCard;
