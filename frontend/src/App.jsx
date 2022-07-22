import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Accueil from "@pages/Accueil";
import Formulaire from "@components/Formulaire";
import Connexion from "@components/Connexion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="accueil/formulaire" element={<Formulaire />} />
        <Route path="accueil/connexion" element={<Connexion />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
