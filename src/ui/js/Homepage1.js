import { Fragment, useLayoutEffect, forwardRef } from "react";
import myPotrait from "url:../../img/my-potrait.png"; // eslint-disable-line
import { CSSTransition } from "react-transition-group";

const Homepage1 = ({ toggleActive, toggleAnimate1, animate }, ref) => {
  // try to remove code below and see what happens
  useLayoutEffect(() => {
    toggleActive("home");
    toggleAnimate1(true);
  }, []);

  return (
    <Fragment>
      <div ref={ref} className="separator" id="home"></div>
      <div className="page">
        <svg
          className="bg"
          viewBox="0 0 1920 963"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <CSSTransition
            in={animate}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <path
              className="svg-bg-path"
              d="M-61.9582 75.7972L-91 70.6783V63H-27.636C-8.97883 63 6.33414 67.0951 18.3029 75.2853C30.2717 83.4755 38.7202 93.8839 43.6485 106.51L123.382 303.587L169.848 171.52L130.774 75.7972L101.732 70.6783V63H165.096C183.753 63 198.89 67.0951 210.507 75.2853C222.124 83.1343 230.748 93.5426 236.381 106.51L316.114 303.587L392.151 86.035L352.548 70.6783V63H450.234V70.6783L407.992 86.035L289.184 426.441H273.343L178.297 192.508L96.4518 426.441H80.6108L-61.9582 75.7972ZM460.98 413.643L492.662 405.965V78.3566L460.98 70.6783V63H529.625C561.307 63 577.148 78.3566 577.148 109.07V190.972C582.428 184.147 587.884 178.687 593.517 174.592C608.654 163.33 626.079 157.699 645.79 157.699C665.503 157.699 683.104 161.794 698.593 169.985C714.434 177.834 726.755 188.242 735.556 201.21C744.356 214.178 748.756 227.828 748.756 242.161V405.965L780.438 413.643V421.322H711.794C680.112 421.322 664.271 405.965 664.271 375.252V242.161C664.271 220.662 660.223 204.281 652.126 193.02C644.382 181.417 635.231 175.615 624.671 175.615C611.294 175.615 599.325 182.441 588.764 196.091C584.188 201.892 580.316 208.717 577.148 216.566V405.965L608.83 413.643V421.322H460.98V413.643ZM952.071 429C908.42 429 874.098 417.056 849.105 393.168C824.463 368.938 812.142 335.666 812.142 293.35C812.142 251.034 824.463 217.931 849.105 194.043C874.098 169.814 908.42 157.699 952.071 157.699C995.722 157.699 1029.87 169.814 1054.51 194.043C1079.5 217.931 1092 251.034 1092 293.35C1092 335.666 1079.5 368.938 1054.51 393.168C1029.87 417.056 995.722 429 952.071 429ZM952.071 418.762C966.152 418.762 977.945 409.207 987.449 390.096C997.306 370.986 1002.23 338.737 1002.23 293.35C1002.23 247.962 997.306 215.713 987.449 196.603C977.945 177.492 966.152 167.937 952.071 167.937C937.99 167.937 926.022 177.492 916.165 196.603C906.66 215.713 901.908 247.962 901.908 293.35C901.908 338.737 906.66 370.986 916.165 390.096C926.022 409.207 937.99 418.762 952.071 418.762Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
          <CSSTransition
            in={animate}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <path
              className="svg-bg-path"
              d="M789 883.31L831.275 867.93L976.597 527H992.45L1143.06 875.62L1169.48 883.31V891H1106.06C1087.75 891 1072.77 887.069 1061.15 879.208C1049.52 871.006 1040.89 860.41 1035.25 847.423L1008.3 785.901H882.006L847.129 867.93L886.762 883.31V891H789V883.31ZM887.29 773.085H1003.02L944.89 638.251L887.29 773.085ZM1179.88 883.31L1211.59 875.62V650.042L1179.88 642.352V634.662H1227.44C1248.23 634.662 1264.61 641.156 1276.59 654.144C1281.17 659.27 1285.04 665.593 1288.22 673.113C1293.5 663.543 1299.14 655.853 1305.13 650.042C1320.98 634.662 1339.12 626.972 1359.56 626.972C1379.99 626.972 1397.96 631.415 1413.46 640.301C1428.96 648.846 1440.93 660.638 1449.39 675.676C1454.67 665.764 1460.31 657.732 1466.3 651.58C1482.51 635.175 1500.65 626.972 1520.73 626.972C1539.4 626.972 1556.14 630.731 1570.93 638.251C1586.08 645.77 1597.71 656.023 1605.81 669.011C1614.26 681.999 1618.49 696.183 1618.49 711.563V875.62L1650.2 883.31V891H1581.5C1549.79 891 1533.94 875.62 1533.94 844.859V711.563C1533.94 689.347 1530.42 672.771 1523.37 661.834C1516.33 650.555 1508.4 644.916 1499.59 644.916C1489.38 644.916 1478.98 651.751 1468.41 665.423C1464.19 671.916 1460.48 678.752 1457.31 685.93V875.62L1489.02 883.31V891H1341.06V883.31L1372.77 875.62V711.563C1372.77 689.347 1369.24 672.771 1362.2 661.834C1355.15 650.555 1347.22 644.916 1338.42 644.916C1328.2 644.916 1317.81 651.751 1307.24 665.423C1303.01 671.916 1299.31 678.752 1296.14 685.93V875.62L1327.85 883.31V891H1179.88V883.31ZM1835.39 891V883.31L1867.1 875.62V547.507L1835.39 539.817V532.127H1986V539.817L1954.29 547.507V875.62L1986 883.31V891H1835.39Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
        </svg>
        <div className="homepage-content">
          <CSSTransition
            in={animate}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <div className="text">
              <h4>GREETINGS</h4>
              <h1>
                Welcome! <br /> My Name is Alief
              </h1>
              <p>
                I’m currently an IS student who have a dedication <br /> in
                modern web development and designing <br /> UI/UX. Welcome to my
                site!
              </p>
              <a href="#profile" className="button-like">
                {" "}
                My Profile{" "}
              </a>
            </div>
          </CSSTransition>
          <CSSTransition
            in={animate}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <img
              src={myPotrait}
              alt="alief-potrait"
              className="alief-potrait"
            />
          </CSSTransition>
        </div>
      </div>
    </Fragment>
  );
};

export default forwardRef(Homepage1);
