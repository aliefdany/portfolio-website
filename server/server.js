import express from "express";
import cors from "cors";
import { connect } from "./utils/db";
import projectRouter from "./resources/project/project.router";
import petsRouter from "./resources/project/pets/pets.router";
import { Project } from "./resources/project/project.model";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "./utils/routes";

import App from "../dist-server/ui/js/App";

async function createDocument() {
  // if (!(await Project.find({ title: "Whatson Indonesia" }))) {
  //   return;
  // }

  await Project.create({
    title: "HappyStore",
    preview:
      "My debut performance as a professional fullstack software developer, developed with PERN stack architecture, HappyStore is an e-commerce website that selling majority of female's trendy shoes",
    overview: [],
    logoURL:
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/happystorelogo_A8fRAYI3M.png?updatedAt=1669085360770&ik-s=0c82f1194abe1a5915e38022843b78baa65ded93",
    imageURL: [
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-26-22_puOitPnbsn.png?updatedAt=1669084881416&ik-s=778337535dcabff3c1336f53e36c5fc566307a67",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-27-48_U_9GbWlXi.png?updatedAt=1669084881850&ik-s=f29deed98729bf89690a6e9f86e796dcae028eb5",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-27-48_U_9GbWlXi.png?updatedAt=1669084881850&ik-s=f29deed98729bf89690a6e9f86e796dcae028eb5",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-36-10_rcsMngEEt.png?updatedAt=1669084879106&ik-s=e1bf400664ce76bc538011b29e8e5aead9793f11",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-36-57_hpzBWJohF.png?updatedAt=1669084880472&ik-s=245ea51a959949050211f385755f9259043b032d",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-37-15_AK0356FfL.png?updatedAt=1669084880366&ik-s=087cc2dc8a7c92dac9603bbcb9182fe9c41e3e7a",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-29-58_RIHmVm1qSV.png?updatedAt=1669084878919&ik-s=2daf014291131299dc55f824487ffe92355de639",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-30-11_SaOzc1woM.png?updatedAt=1669084878644&ik-s=d9d9f62e390899275d43031bd97355a0be623c62",
      "https://ik.imagekit.io/aliefseventri/Projects/HappyStore/Screenshot_from_2022-11-22_09-37-57_mZ9kkpf15o.png?updatedAt=1669084882194&ik-s=d6dbedd61b0f3cabea547e0103dd033711f7789c",
    ],
    done: true,
    siteLink: "https://happystore.id",
    repoLink: "",
    tags: [
      {
        tag: "React",
        color: "#1ABCFE",
      },
      {
        tag: "Node",
        color: "#0ACF83",
      },
      {
        tag: "Express",
        color: "#00713A",
      },
      {
        tag: "PostgreSQL",
        color: "#007070",
      },
    ],
  });

  await Project.create({
    title: "Whatson Indonesia",
    preview:
      "The idea of this site is come from myself. it is a project for making an indonesia’s wiki. user can search and browse information about indonesia in a cooler way!",
    overview: [
      "The idea of this product is to makes people easier and convenient whenever they wants to look up information about indonesia, the culture, tourism, etc.",
      "The design itself was made using figma. currently this website is work in progress to be made online. i code this web using ReactJS, basic CSS, node.js, and mongoDB for the database. share your thought!",
    ],
    logoURL:
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-logo-raster_Njobajd87.png?updatedAt=1626883684448&ik-s=cdc573e3d7fb5e58452b386986ab3a43ea45fac9",
    imageURL: [
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-LandingPage_BE2aW5ar5.png?updatedAt=1626882782148&ik-s=ad04a8ae8bce7e52c9b87f866c324f551cf3f8d6",
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-Culture_ExImLkNQV.png?updatedAt=1626882785119&ik-s=8eb98e2540edd53eb69eefca0fe4788d26640f4a",
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-Details_sF5oDQ2XU.png?updatedAt=1626882785991&ik-s=7cf61d9c58c189dd4cd309e1c0ae654d81ba995d",
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-Travel_WFk7u9akw.png?updatedAt=1626882786953&ik-s=503de285502c988bd7351f8e5387cf8c5e4d940f",
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-TraditionExpand_CBffqQmFx.png?updatedAt=1626882784180&ik-s=1499f75d7233870bfbd6990da638151bada31d35",
      "https://ik.imagekit.io/aliefseventri/Projects/Whatson_Indonesia/WOID-Culinary_Y3nGA1TBg.png?updatedAt=1626882783407&ik-s=28177de93f22e580ddb26982446340488d311375",
    ],
    done: false,
    siteLink: "",
    repoLink: "https://github.com/aliefdany/whatson-indonesia",
    tags: [
      {
        tag: "React",
        color: "#1ABCFE",
      },
      {
        tag: "Node",
        color: "#0ACF83",
      },
      {
        tag: "CSS",
        color: "#4285F4",
      },
    ],
  });

  await Project.create({
    title: "Microsoft Landingpage Redesign",
    preview:
      "Its a college projects that i’ve done in second semester of university. It is responsive landing page that built with HTML, CSS, JS, and a little  JQuery",
    overview: [],
    logoURL: "",
    imageURL: [
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/microsoft_landingpage_ub1ZcQqQl?updatedAt=1628005637903&ik-s=e8addfef2b86724e50df4790c4ca9d37fade8699",
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/microsoft_landingpage-2_BiE8DviN5i6?updatedAt=1629221282646&ik-s=58e21c804d055291eafe333b6467d0f250b18f3e",
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/microsoft_landingpage_3_nvQNCNjoD?updatedAt=1629221323188&ik-s=686ba664c9ae694f8622888d2a0893ce0f1181b1",
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/microsoft_landingpage_4_-77crl1N2?updatedAt=1629221390415&ik-s=cef58d211722c97d1790815897fb4f879ba283d5",
    ],
    done: true,
    siteLink: "https://aliefdany.github.io/microsoft-landingpage-redesign",
    repoLink: "https://github.com/aliefdany/microsoft-landingpage-redesign",
    tags: [
      {
        tag: "HTML",
        color: "#F24E1E",
      },
      {
        tag: "CSS",
        color: "#4285F4",
      },
      {
        tag: "JS",
        color: "#A97B00",
      },
      {
        tag: "JQuery",
        color: "#C69000",
      },
      {
        tag: "Bootstrap",
        color: "#4285F4",
      },
    ],
  });

  await Project.create({
    title: "Portfolio Website",
    preview:
      "My own portfolio project that i started a few months ago. It built with React with Server-Side Rendering in Mind. So, it is fast and snappy, well actually it is this site!",
    overview: [],
    logoURL: "",
    imageURL: [
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/Web_Preview/porto-homepage_U8Gihmz20h4.png?updatedAt=1628000012773&ik-s=ded2a0f32797aa737b1a08da341a0ea389c4d992",
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/Web_Preview/porto-homepage-2_RGhsMJNu8.png?updatedAt=1628000013356&ik-s=b0046dc833feaa02c046b6f068419ef228df4399",
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/Web_Preview/porto-homepage-3_Y7V0UvPA7f.png?updatedAt=1628000014295&ik-s=b74e0e10f1c418c447fe576d7c74b77b5cced24b",
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/Web_Preview/porto-project_mzMY48ULnmY.png?updatedAt=1628000015691&ik-s=f74b7491263b8fd9f2b9e7f89e2890170bb806b1",
      "https://ik.imagekit.io/aliefseventri/Projects/Web_Portfolio/Web_Preview/porto-contact_zJOrU-Fbtg.png?updatedAt=1628000012179&ik-s=4edc558bcaa4d4d260932b7ed5f1666d686f1c49",
    ],
    done: true,
    siteLink: "https://aliefdany.github.io/portfolio-website",
    repoLink: "https://github.com/aliefdany/portfolio-website",
    tags: [
      {
        tag: "React",
        color: "#1ABCFE",
      },
      {
        tag: "Node",
        color: "#0ACF83",
      },
      {
        tag: "CSS",
        color: "#4285F4",
      },
      {
        tag: "Express",
        color: "#0069FF",
      },
      {
        tag: "MongoDB",
        color: "#3C8679",
      },
    ],
  });

  await Project.create({
    title: "Adopt Me",
    preview:
      "Pet adoption apps that based on United States. Build with React with real API from pet adopting company Petfinder",
    overview: [],
    logoURL: "",
    imageURL: [
      "https://ik.imagekit.io/aliefseventri/Projects/Adopt-Me/adopt-me-3_xPvFkzLO0?updatedAt=1629221206471&ik-s=bd2ab08f486e5a9f1cdd59119e9a5f302f438f9d",
      "https://ik.imagekit.io/aliefseventri/Projects/Adopt-Me/adopt-me-2_VjNaF_2ZY?updatedAt=1629221181827&ik-s=e0a8a0e81f9246a55849113442501770f8796c1b",
      "https://ik.imagekit.io/aliefseventri/Projects/Adopt-Me/adopt-me-1_CudWkC5lO?updatedAt=1629220999363&ik-s=142aa302dc5fbaf4d2af6e66d4f201e649f3fe1f",
    ],
    done: true,
    siteLink: "https://aliefdany.github.io/adopt-me",
    repoLink: "https://github.com/aliefdany/adopt-me",
    tags: [
      {
        tag: "React",
        color: "#1ABCFE",
      },
      {
        tag: "CSS",
        color: "#4285F4",
      },
    ],
  });

  console.log("created new project");
}

export const app = express();

app.use(cors());

app.disable("x-powered-by");

// serve static assets
app.get(
  /\.(js|css|map|svg)$/,
  express.static(path.resolve(__dirname, "../build"))
);

app.use("/api/project", projectRouter);
app.use("/api/pets", petsRouter);

app.get("/robots.txt", (req, res) => {
  let robots = fs.readFileSync(path.resolve(__dirname, "../robots.txt"), {
    encoding: "utf-8",
  });

  res.status(200).send(robots);
});

app.use("*", async (req, res) => {
  let matchRoute = routes.find((route) => {
    return matchPath(req.originalUrl, route);
  });

  let context = {};
  let componentData = null;

  // for data fetch
  if (matchRoute && typeof matchRoute.component.fetchProjects === "function") {
    componentData = await matchRoute.component.fetchProjects();
    context.data = componentData;
  }

  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );

  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../build/index.html"),
    {
      encoding: "utf-8",
    }
  );

  indexHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${appHTML}</div>`
  );

  indexHTML = indexHTML.replace(
    "var initial_state = null;",
    `var initial_state = ${JSON.stringify(componentData)};`
  );
  res.contentType("text/html");

  if (context.notfound) {
    res.status(404);
  } else {
    res.status(200);
  }

  return res.send(indexHTML);
});

export const start = async () => {
  try {
    await connect();
    await createDocument();
    app.listen(3000, () => {
      console.log("REST API on http:localhost:3000/api");
    });
  } catch (e) {
    console.error(e);
  }
};
