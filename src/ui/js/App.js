import { render } from "react-dom";
import Navbar from "./Navbar";
import Homepage1 from "./Homepage1";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";
import VNav from "./VNav";
import { Fragment } from "react";

console.log(window.scrollY);
const App = () => {
  return (
    <Fragment>
      <VNav />
      <Navbar />
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
    </Fragment>
  );
};
render(<App />, document.getElementById("root"));
