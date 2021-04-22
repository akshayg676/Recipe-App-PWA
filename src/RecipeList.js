import React from "react";
import "./RecipeList.css";

export default function RecipeList({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeList"
        onClick={() => {
          window.open(recipe["recipe"]["url"]);
        }}
      >
        <img
          className="recipeList__img"
          src={recipe["recipe"]["image"]}
          alt="Recipe img"
        />
        <h2 className="recipeList__name">{recipe["recipe"]["label"]}</h2>
        <section className="recipeList__ingredientLines">
          <p style={{ fontWeight: "bold", margin: "1rem 0" }}>Ingredients:</p>
          {recipe["recipe"]["ingredientLines"].map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </section>
      </div>
    )
  );
}
