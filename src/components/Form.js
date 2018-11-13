import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "1em" }}>
    <input text="text" name="recipeName" />
    <button>Click Here</button>
  </form>
);

export default Form;
