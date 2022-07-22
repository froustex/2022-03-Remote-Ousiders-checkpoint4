import React, { useState } from "react";
import "../style/Connexion.css";
import { api } from "../services/service";

function Connexion() {
  const [user, setUser] = useState();

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const ENDPOINT = "/auth/login";
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(ENDPOINT).then((result) => result);
  };

  return (
    <div className="connect" onSubmit={handleSubmit} method="post">
      <div className="connectEmail">
        <label htmlFor="connect_email">
          <p className="pform">Email</p>
          <input
            type="email"
            id="connectEmail"
            name="email"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="connectPassword">
        <label htmlFor="connect_password">
          <p className="pform">Mot de passe</p>
          <input
            type="password"
            id="connectPassword"
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="connexionButton">
        <button className="buttonConnect" type="button" onClick={handleSubmit}>
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Connexion;
