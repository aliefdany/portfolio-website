const ProjectTags = ({ tag, color }) => {
  return (
    <h4
      className="project-tag"
      style={{ backgroundColor: color, color: "#e9e9e9" }}
    >
      {tag}
    </h4>
  );
};

export default ProjectTags;
