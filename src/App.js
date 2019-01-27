import React, { Component } from "react";
//import logo from './logo.svg';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";

//api key
const API_KEY = "3e6ff9c064412e0e3#######";

class App extends Component {
  state = {
    recipes: []
  };

  //prevent refresh on page
  //fetch of api
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=6`
    );
    //console log on page
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  //title and header
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ODALIS RECIPE REACT PROJECT</h1>
        </header>

        <Form getRecipe={this.getRecipe} />

        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
