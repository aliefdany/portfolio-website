import { Fragment } from "react";
import Homepage1 from "./Homepage1";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";

const Homepage = ({
  toggleActive,
  toggleAnimate1,
  toggleAnimate2,
  toggleAnimate3,
  toggleNav,
  animate1,
  animate2,
  animate3,
}) => {
  return (
    <Fragment>
      <Homepage1
        toggleActive={toggleActive}
        toggleAnimate1={toggleAnimate1}
        toggleAnimate2={toggleAnimate2}
        animate={animate1}
      />
      <Homepage2
        toggleActive={toggleActive}
        toggleAnimate1={toggleAnimate1}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate2}
      />
      <Homepage3
        toggleNav={toggleNav}
        toggleActive={toggleActive}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate3}
      />
    </Fragment>
  );
};

export default Homepage;
