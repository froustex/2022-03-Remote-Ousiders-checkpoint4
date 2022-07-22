import React, { useState } from "react";
import { api } from "@services/service";
import "../style/Formulaire.css";

function Formulaire() {
  const [user, setUser] = useState();

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const ENDPOINT = "/auth/signin";
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(ENDPOINT).then((result) => result.data);
  };

  return (
    <div className="inscription">
      <form type="submit" onSubmit={handleSubmit} method="post">
        <div className="register-form">
          <label htmlFor="user_nom">
            <p className="pform">Pseudo</p>
            <input
              type="text"
              id="userNom"
              name="pseudo"
              placeholder=""
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="register-form">
          <label htmlFor="user_email">
            <p className="pform">Email</p>
            <input
              type="email"
              id="userEmail"
              name="email"
              placeholder=""
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="register-form">
          <label htmlFor="user_password">
            <p className="pform">Mot de passe</p>
            <input
              type="password"
              id="userPassword"
              name="password"
              placeholder=""
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="register-text">
          <p className="pform">Présentez-vous</p>
          <textarea
            id="story"
            name="description"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="buttonRegister">
          <button className="regButton" type="button">
            {" "}
            S'enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
