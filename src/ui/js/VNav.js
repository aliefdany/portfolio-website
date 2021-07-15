import { Link, HashRouter } from "react-router-dom";

const VNav = ({ active }) => {
  return (
    <ul className="vnav">
      <li>
        <HashRouter hashType={"noslash"}>
          <Link
            to="home"
            style={
              active == "home"
                ? {
                    color: "hsl(169, 38%, 38%)",
                    fontSize: "1.3vw",
                    transition: "all 1s",
                  }
                : {}
            }
          >
            —Home
          </Link>
        </HashRouter>
      </li>
      <li>
        <HashRouter hashType={"noslash"}>
          <Link
            to="profile"
            style={
              active == "profile"
                ? {
                    color: "hsl(169, 38%, 38%)",
                    fontSize: "1.3vw",
                    transition: "all 1s",
                  }
                : {}
            }
          >
            —Profile
          </Link>
        </HashRouter>
      </li>
      <li>
        <HashRouter hashType={"noslash"}>
          <Link
            to="skills"
            style={
              active == "skills"
                ? {
                    color: "hsl(169, 38%, 38%)",
                    fontSize: "1.3vw",
                    transition: "all 1s",
                  }
                : {}
            }
          >
            —Skills
          </Link>
        </HashRouter>
      </li>
    </ul>
  );
};

export default VNav;
