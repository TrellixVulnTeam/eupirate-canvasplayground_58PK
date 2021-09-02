import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { SecondaryButton } from "@workday/canvas-kit-react";

function clickMe() {
  alert("Click me to vote!");
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>I love Thank You Fridays!!</p>
      <p>Please give us more!</p>
      <SecondaryButton>Vote Button</SecondaryButton>
    </div>
  );
}

export default App;
