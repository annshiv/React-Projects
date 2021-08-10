import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../store/actions/alertActions";
import { getWeather, setLoading } from "../../store/actions/weatherActions";
import './Search.css';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const changeHandler2 = (e: FormEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }

    dispatch(setLoading());
    dispatch(getWeather(city, country));
    setCity("");
  };

  return (
    <div className="main">
      <h1 className="heading1">Check your weather !!!</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input-city"
          placeholder="Enter city name"
          value={city}
          onChange={changeHandler}
        />
        <input
          type="text"
          className="input-country"
          placeholder="Enter country name"
          value={country}
          onChange={changeHandler2}
        />
        <button
          className="getweather"
        >
          Get weather
        </button>
      </form>
    </div>
  );
};

export default Search;
