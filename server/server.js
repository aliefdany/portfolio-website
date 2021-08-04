import express from "express";
import { connect } from "./utils/db";
import projectRouter from "./resources/project/project.router";
import { Project } from "./resources/project/project.model";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

// import app component
import App from "../dist-server/ui/js/App";

async function createDocument() {
  if (!(await Project.find({ title: "Whatson Indonesia" }))) {
    return;
  }
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
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/FireShot_Capture_006_-_Hello__world__-_aliefdany.github.io_Qr4Hx4LnY1.png?updatedAt=1628000750152&ik-s=2671e1cbf4fef5ea53ec8e521e1f5a993b864e9f",
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/FireShot_Capture_008_-_Hello__world__-_aliefdany.github.io_lgOxVkgf65D.png?updatedAt=1628000753823&ik-s=37f85304db69fe49064762cb678afa381f912032",
      "https://ik.imagekit.io/aliefseventri/Projects/Microsoft_Redesign/FireShot_Capture_009_-_Hello__world__-_aliefdany.github.io_AKNA5Q-23b.png?updatedAt=1628000752540&ik-s=e1e3063a8fffcf95a7d07a8995eafd3eecc69679",
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
}

export const app = express();

app.disable("x-powered-by");

// serve static assets
app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../build"))
);

app.use("/api/project", projectRouter);

app.get("/robots.txt", (req, res) => {
  let robots = fs.readFileSync(path.resolve(__dirname, "../robots.txt"), {
    encoding: "utf-8",
  });

  res.status(200).send(robots);
});

app.use("*", (req, res) => {
  // read index.html file
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../build/index.html"),
    {
      encoding: "utf-8",
    }
  );

  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  );

  indexHTML = indexHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${appHTML}</div>`
  );

  //   set header and status
  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

export const start = async () => {
  try {
    await connect();
    app.listen(3000, () => {
      // createDocument();
      console.log("REST API on http:localhost:3000/api");
    });
  } catch (e) {
    console.error(e);
  }
};
