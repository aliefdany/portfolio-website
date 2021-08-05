import { useState, useEffect } from "react";
import Project from "./Project";

const useIsSsr = () => {
  // we always start off in "SSR mode", to ensure our initial browser render
  // matches the SSR render
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    // `useEffect` never runs on the server, so we must be on the client if
    // we hit this block
    setIsSsr(false);
  }, []);

  return isSsr;
};

const ProjectMiddle = ({ toggleNav, showNav }) => {
  const isSsr = useIsSsr();

  if (isSsr) {
    return null;
  }

  return <Project toggleNav={toggleNav} showNav={showNav} />;
};

export default ProjectMiddle;
