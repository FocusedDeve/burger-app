import { useState } from "react";
import "./App.css";

function App() {
  // state (état, données)
  const [prenom, setPrenom] = useState("");

  // comportements
  const handleClick = () => {
    if (prenom !== "") {
      alert(`Bonjour ${prenom}`);
    } else {
      console.error("veuillez remplir le champ");
    }
  };

  const handleOnchange = (event) => {
    setPrenom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.current.value;
    setPrenom("");
  };

  // affichge (render)

  return (
    <div>
      <h1>Bonjour chez nous !</h1>
      <br />
      <h1>Connectez-vous</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          required
          onChange={handleOnchange}
          placeholder="Entrez votre prénom"
          value={prenom}
        />
        <button onClick={handleClick}>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default App;
