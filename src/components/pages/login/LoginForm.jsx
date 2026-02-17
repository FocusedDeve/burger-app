import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  // comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
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
        onChange={handleChange}
        placeholder="Entrez votre prénom ..."
        value={inputValue}
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
