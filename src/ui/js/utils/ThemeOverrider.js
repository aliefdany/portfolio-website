export function overrideLight(body, nav, buttonLike, darkmodeBtn, footer) {
  buttonLike.forEach((element) => {
    element.classList.remove("buttonlike-overrideDark");
  });
  nav.classList.remove("nav-overrideDark");
  body.classList.remove("body-overrideDark");
  darkmodeBtn.classList.remove("darkmodebtn-overrideDark");
  footer.classList.remove("footer-overrideDark");

  buttonLike.forEach((element) => {
    element.classList.add("buttonlike-overrideLight");
  });
  nav.classList.add("nav-overrideLight");
  body.classList.add("body-overrideLight");
  darkmodeBtn.classList.add("darkmodebtn-overrideLight");
  footer.classList.add("footer-overrideLight");
}

export function overrideDark(body, nav, buttonLike, darkmodeBtn, footer) {
  buttonLike.forEach((element) => {
    element.classList.remove("buttonlike-overrideLight");
  });
  nav.classList.remove("nav-overrideLight");
  body.classList.remove("body-overrideLight");
  footer.classList.remove("footer-overrideLight");

  buttonLike.forEach((element) => {
    element.classList.add("buttonlike-overrideDark");
  });
  nav.classList.add("nav-overrideDark");
  body.classList.add("body-overrideDark");
  darkmodeBtn.classList.add("darkmodebtn-overrideDark");
  footer.classList.add("footer-overrideDark");
}
