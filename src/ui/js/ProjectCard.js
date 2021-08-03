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
  return (
    <div className="project-card">
      <div className="project-preview">
        <div className="project-img">
          <img src={thumb} alt="project-img" />
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
