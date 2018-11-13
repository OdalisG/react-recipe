import React from "react";

import { Link } from "react-router-dom";

//styles, button and length
//links
//props
//texts, titles and subtitles
const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.title}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h3 className="recipes__title">
                  {recipe.title.length < 15
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 20)}...`}
                </h3>
                <p className="recipes__subtitle">
                  Publisher:<span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  Click Here
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
