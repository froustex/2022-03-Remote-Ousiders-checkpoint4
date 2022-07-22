import React from "react";
import "../style/Accueil.css";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil">
      <div className="contentTitle">
        <div className="containerTitle">
          <h2 className="quizTitle">Quiz Time</h2>
        </div>
      </div>
      <div className="identify">
        <div className="register">
          <Link to="accueil/formulaire">
            <button className="registerButton" type="button">
              S'inscrire
            </button>
          </Link>
        </div>
        <div className="login">
          <Link to="accueil/connexion">
            <button className="loginButton" type="button">
              Se Connecter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
