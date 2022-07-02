import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Coco",
      animal: "Dog",
      breed: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Lucy",
      animal: "Cat",
      breed: "Russian Blue",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
