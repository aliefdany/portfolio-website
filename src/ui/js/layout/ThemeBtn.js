import { overrideDark, overrideLight } from "../utils/ThemeOverrider";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState, useEffect } from "react";

const ThemeBtn = ({ currentlyLightTheme, toggle }) => {
  // const [currentlyLightTheme, toggle] = useState(
  //   window.matchMedia("(prefers-color-scheme: light)").matches
  // );
  const [prefer, setPrefer] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  function toggleTheme() {
    let body = document.querySelector("body");
    let nav = document.querySelector("nav");
    let buttonLike = document.querySelectorAll("a.button-like");
    let darkmodeBtn = document.querySelector(".darkmode-container button");
    let footer = document.querySelector("footer");

    if (currentlyLightTheme) {
      overrideLight(body, nav, buttonLike, darkmodeBtn, footer);
      toggle(false);
    } else {
      overrideDark(body, nav, buttonLike, darkmodeBtn, footer);
      toggle(true);
    }
  }

  useEffect(() => {
    const preferCache =
      localStorage.getItem("prefer") == "false" ? false : true;
    setPrefer(preferCache);

    if (!preferCache) {
      toggleTheme();
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("prefer", prefer);
    }

    setFirstRender(false);
  }, [prefer]);

  return (
    <div className="darkmode-container">
      <DarkModeToggle
        onChange={() => {
          toggleTheme();
          setPrefer(!prefer);
        }}
        checked={!currentlyLightTheme}
      />
      {}
    </div>
  );
};

export default ThemeBtn;

/*

My own implementation of darkmode toggle button

*/

// function handlePosition(currentlyLightTheme) {
//   const btn = document.querySelector(".darkmode-text");
//   const icon = document.querySelector(".circle-icon");
//   if (currentlyLightTheme) {
//     btn.classList.add("align-right");
//     icon.classList.add("align-left");
//   } else {
//     btn.classList.remove("align-right");
//     icon.classList.remove("align-left");
//   }
// }

// in case you wants to use your own, put this inside the container
/*
<button
  onClick={() => {
    toggleTheme();
    handlePosition(currentlyLightTheme);
  }}
>
  <div className="darkmode-text">{currentlyLightTheme ? "Light" : "Dark"}</div>
  <CgDarkMode className="circle-icon" />
</button>;
*/

// useEffect(() => {
//   if (!currentlyLightTheme) {
//     handlePosition(!currentlyLightTheme);
//   }
// }, []);
