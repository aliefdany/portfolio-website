import { Fragment, useLayoutEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import VNav from "./VNav";

import ProjectCard from "./ProjectCard";

const Project = ({ toggleNav, showNav }) => {
  const [projects, setProject] = useState([]);
  const project = useRef();
  const browserHeight = window.innerHeight;

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y == 0) {
        toggleNav(true);
      }
      if (currPos.y <= -browserHeight * 0.5) {
        toggleNav(false);
      }
    },
    [],
    project
  );

  useLayoutEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    let res = await fetch("/api/project");
    res = await res.json();
    setProject(res);
  }

  return (
    <Fragment>
      <VNav
        // handling browser's back button
        active="project"
        showNav={showNav}
        VNavArr={["project"]}
      />

      <div ref={project} className="separator" id="contacts"></div>
      <div className="page project">
        <svg
          className="bg"
          viewBox="0 0 1920 961"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <path
              className="svg-bg-path"
              d="M-24.0422 118.568V383.858L17.3817 398.874V406.383H-81V398.874L-39.5761 383.858V71.0164L-70.644 63.5082V56H-5.91926C12.0311 56 26.1842 59.6707 36.5402 67.012C47.2413 74.0197 56.3891 84.5311 63.9835 98.5464L176.863 307.274L263.336 98.5464C269.204 83.8637 277.144 73.1854 287.155 66.5115C297.165 59.5038 312.527 56 333.239 56H387.607V63.5082L356.539 71.0164V391.366L387.607 398.874V406.383H240.035V398.874L271.103 391.366V118.568L149.42 411.388H133.886L-24.0422 118.568ZM491.349 514C475.815 514 463.733 509.996 455.103 501.987C446.473 493.978 442.158 482.966 442.158 468.951C442.158 456.27 445.61 446.426 452.514 439.419C459.763 432.411 469.256 428.907 480.993 428.907C483.755 428.907 486.516 429.074 489.278 429.408C492.039 430.075 493.938 430.409 494.973 430.409L501.705 431.41V498.984C511.716 497.315 520.518 491.976 528.113 482.966C535.707 473.956 544.164 458.439 553.485 436.415L563.841 411.388L429.213 171.126L403.323 163.617V156.109H468.048C485.998 156.109 500.151 159.78 510.507 167.121C521.209 174.129 530.356 184.64 537.951 198.656L602.676 314.282L657.042 178.634L618.209 163.617V156.109H714V163.617L672.576 178.634L569.019 436.415C557.972 463.778 546.236 483.467 533.808 495.48C521.381 507.827 507.228 514 491.349 514Z"
              fill="#484539"
              fillOpacity="0.1"
            />
          </CSSTransition>

          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <path
              className="svg-bg-path"
              d="M145 878.874L176.043 871.366V551.016L145 543.508V536H289.87C347.128 536 388.174 545.177 413.009 563.53C437.843 581.55 450.261 608.246 450.261 643.618C450.261 678.989 437.843 705.852 413.009 724.205C388.174 742.225 347.128 751.235 289.87 751.235H261.413V871.366L292.457 878.874V886.383H145V878.874ZM289.87 738.721C311.6 738.721 329.019 730.713 342.126 714.695C355.578 698.678 362.304 674.985 362.304 643.618C362.304 612.584 355.578 589.058 342.126 573.04C329.019 556.689 311.6 548.514 289.87 548.514H261.413V738.721H289.87ZM488.964 878.874L520.007 871.366V651.126L488.964 643.618V636.109H535.529C555.88 636.109 571.919 642.45 583.646 655.13C588.13 660.136 591.925 666.309 595.029 673.65C600.203 666.309 606.584 659.635 614.173 653.628C631.42 640.281 650.736 633.607 672.121 633.607C690.402 633.607 704.027 637.778 712.995 646.12C722.308 654.129 726.965 665.808 726.965 681.159C726.965 692.504 723.343 701.681 716.099 708.689C709.201 715.363 699.888 718.699 688.16 718.699C683.331 718.699 678.502 718.366 673.673 717.698L667.465 716.197V646.12C649.873 646.12 633.834 652.794 619.346 666.142C612.448 672.816 606.929 679.49 602.79 686.164V871.366L633.834 878.874V886.383H488.964V878.874ZM887.298 893.891C844.527 893.891 810.897 882.211 786.407 858.852C762.262 835.16 750.19 802.624 750.19 761.246C750.19 719.867 762.262 687.499 786.407 664.14C810.897 640.447 844.527 628.601 887.298 628.601C930.069 628.601 963.527 640.447 987.672 664.14C1012.16 687.499 1024.41 719.867 1024.41 761.246C1024.41 802.624 1012.16 835.16 987.672 858.852C963.527 882.211 930.069 893.891 887.298 893.891ZM887.298 883.88C901.095 883.88 912.651 874.536 921.964 855.849C931.622 837.162 936.451 805.628 936.451 761.246C936.451 716.864 931.622 685.33 921.964 666.643C912.651 647.956 901.095 638.612 887.298 638.612C873.501 638.612 861.774 647.956 852.116 666.643C842.803 685.33 838.146 716.864 838.146 761.246C838.146 805.628 842.803 837.162 852.116 855.849C861.774 874.536 873.501 883.88 887.298 883.88ZM1063.39 994C1037.52 994 1018.55 989.829 1006.48 981.486C994.406 973.144 988.369 961.465 988.369 946.448C988.369 935.102 991.991 925.926 999.235 918.918C1006.13 912.244 1015.45 908.907 1027.17 908.907C1029.93 908.907 1032.69 909.074 1035.45 909.408C1038.21 910.075 1040.11 910.409 1041.14 910.409L1047.87 911.41V981.486L1050.97 982.988C1054.42 983.655 1056.84 983.989 1058.22 983.989C1068.91 983.989 1077.53 977.649 1084.09 964.968C1090.99 952.622 1094.43 931.432 1094.43 901.399V651.126L1063.39 643.618V636.109H1130.65C1161.7 636.109 1177.22 651.126 1177.22 681.159V901.399C1177.22 919.085 1172.73 934.936 1163.76 948.951C1154.8 962.966 1141.69 973.978 1124.44 981.987C1107.2 989.996 1086.85 994 1063.39 994ZM1130.65 606.077C1120.3 606.077 1111.68 602.74 1104.78 596.066C1097.88 589.392 1094.43 581.049 1094.43 571.038C1094.43 561.027 1097.88 552.685 1104.78 546.011C1111.68 539.337 1120.3 536 1130.65 536C1141 536 1149.62 539.337 1156.52 546.011C1163.42 552.685 1166.87 561.027 1166.87 571.038C1166.87 581.049 1163.42 589.392 1156.52 596.066C1149.62 602.74 1141 606.077 1130.65 606.077ZM1376.45 893.891C1332.3 893.891 1297.98 882.211 1273.49 858.852C1249 835.16 1236.75 802.624 1236.75 761.246C1236.75 734.216 1242.1 710.691 1252.79 690.669C1263.48 670.647 1278.32 655.297 1297.29 644.619C1316.6 633.94 1338.68 628.601 1363.51 628.601C1388.35 628.601 1410.08 633.106 1428.71 642.116C1447.68 651.126 1462.16 663.306 1472.17 678.656C1482.51 693.672 1487.69 710.357 1487.69 728.71C1487.69 737.053 1486.83 744.227 1485.1 750.234L1482.51 758.743C1467.68 761.746 1451.64 764.249 1434.4 766.251C1398.18 771.257 1361.62 773.76 1324.71 773.76C1324.71 812.469 1330.23 840.165 1341.27 856.85C1352.3 873.201 1367.48 881.377 1386.8 881.377C1400.25 881.377 1412.67 878.374 1424.05 872.367C1435.78 866.027 1444.92 857.851 1451.47 847.84C1458.37 837.496 1461.82 826.984 1461.82 816.306H1474.75C1474.75 829.654 1470.61 842.334 1462.34 854.348C1454.06 866.361 1442.5 876.038 1427.67 883.379C1412.84 890.387 1395.76 893.891 1376.45 893.891ZM1324.71 761.246C1346.78 761.246 1364.72 760.412 1378.52 758.743C1384.38 758.41 1390.59 757.575 1397.14 756.24C1397.49 754.572 1398.35 750.901 1399.73 745.228C1401.46 736.886 1402.32 728.043 1402.32 718.699C1402.32 691.003 1398.52 670.814 1390.94 658.133C1383.35 645.119 1374.21 638.612 1363.51 638.612C1337.64 638.612 1324.71 679.49 1324.71 761.246ZM1665.97 893.891C1621.82 893.891 1587.5 882.211 1563.01 858.852C1538.52 835.16 1526.28 802.624 1526.28 761.246C1526.28 719.867 1538.52 687.499 1563.01 664.14C1587.5 640.447 1621.82 628.601 1665.97 628.601C1697.71 628.601 1721.51 633.94 1737.37 644.619C1753.58 655.297 1761.69 668.311 1761.69 683.661C1761.69 695.007 1758.07 704.184 1750.82 711.191C1743.93 717.865 1734.61 721.202 1722.89 721.202C1718.06 721.202 1713.23 720.869 1708.4 720.201L1702.19 718.699V643.618L1694.95 641.115C1689.77 639.446 1683.56 638.612 1676.32 638.612C1656.66 638.612 1641.31 647.622 1630.27 665.642C1619.58 683.661 1614.23 715.529 1614.23 761.246C1614.23 805.628 1619.58 836.828 1630.27 854.848C1641.31 872.534 1656.66 881.377 1676.32 881.377C1689.77 881.377 1702.19 878.374 1713.57 872.367C1725.3 866.027 1734.44 857.851 1740.99 847.84C1747.89 837.496 1751.34 826.984 1751.34 816.306H1764.28C1764.28 829.654 1760.14 842.334 1751.86 854.348C1743.58 866.361 1732.03 876.038 1717.19 883.379C1702.36 890.387 1685.29 893.891 1665.97 893.891ZM1935.15 893.891C1912.39 893.891 1892.55 889.886 1875.65 881.878C1859.1 873.869 1846.33 862.857 1837.37 848.842C1828.4 834.826 1823.91 818.976 1823.91 801.29V648.623H1787.7V636.109H1823.91V611.082C1823.91 581.049 1839.43 566.033 1870.48 566.033H1906.7V636.109H1979.13V648.623H1906.7V801.29C1906.7 831.99 1909.97 853.013 1916.53 864.359C1923.08 875.704 1932.74 881.377 1945.5 881.377C1957.92 881.377 1968.78 875.537 1978.1 863.858C1987.41 852.178 1992.07 836.328 1992.07 816.306H2005C2005 841 1998.62 860.187 1985.86 873.869C1973.09 887.217 1956.19 893.891 1935.15 893.891Z"
              fill="#484539"
              fillOpacity="0.1"
            />
          </CSSTransition>
        </svg>

        <div className="homepage-content project">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="project-text">
              <h4>Project</h4>
              <h1>Projects</h1>
              <p>
                By the time you end up on this page, i’ve done 3 project. 2 of
                them is individual project and 1 is a team project. This website
                is one of my individual project. Checkout my projects on the
                right side of this page and share your thought!
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="cards">
              {projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    thumb={project.imageURL[0]}
                    preview={project.preview}
                    done={project.done}
                    repoLink={project.repoLink}
                    siteLink={project.siteLink}
                    tags={project.tags}
                    imageURL={project.imageURL}
                  />
                );
              })}
            </div>
          </CSSTransition>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
