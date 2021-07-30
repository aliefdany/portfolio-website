const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");

// create express app
const app = express();

// import app component
const App = require("../dist-server/ui/js/App").default;

// serve static assets
app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../build"))
);

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

// run express server on port 3000
app.listen(3000, () => {
  console.log("express server runs on port 3000");
});
