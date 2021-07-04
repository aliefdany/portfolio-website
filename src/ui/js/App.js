import { render } from "react-dom";
import Navbar from "./Navbar";
import Homepage1 from "./Homepage1";

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage1 />
    </div>
  );
};

render(<App />, document.getElementById("root"));
