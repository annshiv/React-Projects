import React from "react";
import "./App.css";
import Form from "./form";
import Forecast from "./forecast";

const api_key = "8ddceeacaf8b95fe943c88fc8389dee0";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    error: "",
  };

  getweather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`
    );

    const response = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        error: "",
      });
    } else {
      this.setState({
        error: "Please check your city or country name...",
      });
    }
  };
  render() {
    return (
      <div>
        <Form loadWeather={this.getweather} />
        <Forecast
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;
