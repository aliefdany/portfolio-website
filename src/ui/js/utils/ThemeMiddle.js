import useIsSsr from "./useIsSsr";
import ThemeBtn from "../layout/ThemeBtn";

const ThemeMiddle = ({ currentlyLightTheme, toggle }) => {
  const isSsr = useIsSsr();

  if (isSsr) {
    return null;
  }

  return <ThemeBtn currentlyLightTheme={currentlyLightTheme} toggle={toggle} />;
};

export default ThemeMiddle;
