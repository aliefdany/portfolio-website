import ProjectTags from "./ProjectTags";

const ProjectCard = ({
  title,
  thumb,
  preview,
  done,
  repoLink,
  siteLink,
  tags,
}) => {
  let imgSelector = title.split(" ").join("-").toLowerCase();
  let btnSelector = `${imgSelector}-btn`;

  function handleClickPreview() {
    console.log("clicked!");
  }

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
        <div className="project-img">
          <img
            id={title.split(" ").join("-").toLowerCase()}
            onMouseEnter={() => {
              onHover(title);
            }}
            onMouseLeave={() => {
              offHover(title);
            }}
            onMouse
            src={thumb}
            alt="project-img"
          />
          <button
            id={btnSelector}
            onMouseEnter={onHover}
            onClick={handleClickPreview}
          >
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
          >
            Visit Site
          </a>
        )}
        <a
          className="button-like visit-repo"
          href={repoLink}
          target="_blank"
          rel="noreferrer"
        >
          Visit Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
