import { Fragment } from "react";
import Homepage1 from "./Homepage1";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";
import VNav from "./VNav";

const Homepage = ({
  toggleActive,
  toggleAnimate1,
  toggleAnimate2,
  toggleAnimate3,
  toggleNav,
  animate1,
  animate2,
  animate3,
  halfHeight,
  active,
  showNav,
}) => {
  return (
    <Fragment>
      <VNav
        active={active}
        showNav={showNav}
        VNavArr={["intro", "education", "experience"]}
      />
      <Homepage1
        vnavState="intro"
        toggleActive={toggleActive}
        toggleAnimate1={toggleAnimate1}
        toggleAnimate2={toggleAnimate2}
        animate={animate1}
        halfHeight={halfHeight}
      />
      <Homepage2
        vnavState="education"
        toggleActive={toggleActive}
        toggleAnimate1={toggleAnimate1}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate2}
        halfHeight={halfHeight}
      />
      <Homepage3
        vnavState="experience"
        toggleNav={toggleNav}
        toggleActive={toggleActive}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate3}
        halfHeight={halfHeight}
      />
    </Fragment>
  );
};

export default Homepage;
