import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.change}>
      <input
        type="text"
        placeholder="Wpisz nazwę miasta.."
        onChange={props.cityName}
        
      />
      <button className="submit">Wyszukaj</button>
      <p className="error-msg"> </p>
    </form>
  );
};
export default Form;
