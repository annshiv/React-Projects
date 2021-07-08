import React from "react";
import "./App.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

const plaindata = { text: "Hello" };
const data = observable(plaindata);

function buttonClicked() {
  data.text = "Hi this is sample code";
}

function App() {
  return (
    <div className="form">
      {data.text}
      <button onClick={buttonClicked}>click</button>
    </div>
  );
}

export default observer(App);
