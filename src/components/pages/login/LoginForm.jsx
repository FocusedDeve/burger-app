import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState("");

  // comportements
  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  // affichage

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bonjour chez nous !</h1>
      <br />
      <h1>Connectez-vous</h1>
      <input
        type="text"
        required
        onChange={handleOnchange}
        placeholder="Entrez votre prénom ..."
        value={inputValue}
      />
      <Link to="/order">
        <button>Acceder à votre espace</button>
      </Link>
    </form>
  );
}
