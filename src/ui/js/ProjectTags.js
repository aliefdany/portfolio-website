const ProjectTags = ({ tag, color }) => {
  return (
    <h4 className="project-tag" style={{ backgroundColor: color }}>
      {tag}
    </h4>
  );
};

export default ProjectTags;
