import React from "react";

import { Link } from "react-router-dom";

//api
const API_KEY = "3e6ff9c064412e0e38b49c226840465a";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    //request
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}&`
    );
    //respond
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };
  //images, links, container and length are set
  //props
  render() {
    const recipe = this.state.activeRecipe;
    console.log(this.props);
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active.recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h5 className="active-recipe__title">{recipe.title}</h5>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
