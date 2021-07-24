import { Fragment, useState } from "react";
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
  showNav,
}) => {
  const [activeCache, setActiveCache] = useState("intro");
  return (
    <Fragment>
      <VNav
        // handlin browser's back button
        active={activeCache}
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
        setActiveCache={setActiveCache}
      />
      <Homepage2
        vnavState="education"
        toggleActive={toggleActive}
        toggleAnimate1={toggleAnimate1}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate2}
        halfHeight={halfHeight}
        setActiveCache={setActiveCache}
      />
      <Homepage3
        vnavState="experience"
        toggleNav={toggleNav}
        toggleActive={toggleActive}
        toggleAnimate2={toggleAnimate2}
        toggleAnimate3={toggleAnimate3}
        animate={animate3}
        halfHeight={halfHeight}
        setActiveCache={setActiveCache}
      />
    </Fragment>
  );
};

export default Homepage;
