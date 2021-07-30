// ignore style
require("ignore-styles");

// transpile import on the fly
require("@babel/register")({
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-env",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-runtime",
  ],
});

//import express server
require("./express.js");
