import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Coco" animal="dog" breed="poodle" />
      <Pet name="Lily" animal="dog" breed="shar pei" />
      <Pet name="Lucy" animal="cat" breed="mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
