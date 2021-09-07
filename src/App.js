import logo from "./logo.svg";
import "./App.scss";
import * as React from "react";
import { SecondaryButton } from "@workday/canvas-kit-react";
import "@workday/canvas-kit-css/index.scss";

// function clickMe() {
//   alert("Click me to vote!");
// }

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>I love Thank You Fridays!!</p>
      <p>Please give us more!</p>
      <SecondaryButton>Vote Button</SecondaryButton>
      <button class="wdc-btn">Button Label</button>
    </div>
  );
}

export default App;
