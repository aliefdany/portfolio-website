import App from "../App";
import AppSSR from "../AppSSR";
import useIsSsr from "./useIsSsr";

const SSRApp = () => {
  const isSsr = useIsSsr();

  if (isSsr) {
    return <AppSSR />;
  }

  return <App />;
};

export default SSRApp;
