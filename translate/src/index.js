import React from "react";
import ReactDOM from "react-dom";

const submit = () => {
  return "submit";
};

const App = () => {
  const text = { ann: "Annamalai", eka: "Loki", moon : 'nila' };
  return (
    <div>
      <label for="name">Enter your name :</label>
      <input type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {text.eka}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
