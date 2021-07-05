const VNav = ({ active }) => {
  return (
    <ul className="vnav">
      <li>
        <a
          href="#home"
          style={active == "home" ? { color: "hsl(169, 38%, 38%)" } : {}}
        >
          —Home
        </a>
      </li>
      <li>
        <a
          href="#profile"
          style={active == "profile" ? { color: "hsl(169, 38%, 38%)" } : {}}
        >
          —Profile
        </a>
      </li>
      <li>
        <a
          href="#skills"
          style={active == "skills" ? { color: "hsl(169, 38%, 38%)" } : {}}
        >
          —Skills
        </a>
      </li>
    </ul>
  );
};

export default VNav;
