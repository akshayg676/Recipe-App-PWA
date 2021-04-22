import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "./App.css";

const axios = require("axios");

function App() {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");
  var url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=95&health=${healthLabels}`;

  function handleChange() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setHealthLabels(selectedValue);
  }

  const getRecipes = (e) => {
    axios
      .get(url)
      .then(function (response) {
        // handle success

        if (response.data.count < 1) {
          alert("Invalid Ingridient");
        } else {
          console.log(response.data);
          setRecipes(response.data.hits);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // setRecipes(response.data);
    setQuery("");
  };

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 className="app__heading">🍽️ Recipe Basket 🥣</h1>
      <form className="app_searchForm" onSubmit={submit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingridient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="app__healthLabels"
          id="selectBox"
          onChange={() => handleChange()}
        >
          <option value="vegan">vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="gluten-free">gluten-free</option>
          <option value="wheat-free">wheat-free</option>
          <option value="low-sugar">low-sugar</option>
          <option value="egg-free">egg-free</option>
          <option value="peanut-free">peanut-free</option>
          <option value="tree-nut-free">tree-nut-free</option>
          <option value="soy-free">soy-free</option>
          <option value="fish-free">fish-free</option>
          <option value="shellfish-free">shellfish-free</option>
          <option value="paleo">paleo</option>
        </select>

        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app_recipe">
        {recipes.map((recipe) => {
          return <RecipeList recipe={recipe} key={Math.random()} />;
        })}
      </div>
    </div>
  );
}

export default App;
