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
      "Whatson Indonesia is an UI/UX and website project. it’s a website for everybody who wants to know Indonesia further",
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
