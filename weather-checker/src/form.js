import React from "react";

const Form = (props) => {
  return (
    <form onSubmit = {props.loadWeather} >
      <h1 className="heading">Check your weather !!!</h1>
      <input
        className="input"
        type="text"
        name="city"
        placeholder="Choose a City"
      />
      <input
        className="input2"
        type="text"
        name="city"
        placeholder="Choose a Country"
      />
      <button className="get">Get Weather</button>
    </form>
  );
};

export default Form;