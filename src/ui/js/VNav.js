const VNav = () => {
  let mainNavLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
  });

  return (
    <ul className="vnav">
      <li>
        <a href="#home">—Home</a>
      </li>
      <li>
        <a href="#profile">—Profile</a>
      </li>
      <li>
        <a href="#skills">—Skills</a>
      </li>
    </ul>
  );
};

export default VNav;
