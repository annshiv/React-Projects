import React from "react";
import ReactDOM from "react-dom";
import DefaultComment from "./DefaultComment";

const App = () => {
  return (
    <div className="ui comments">
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
      <DefaultComment />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
