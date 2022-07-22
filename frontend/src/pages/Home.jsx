import "../style/Home.css";
import { useState } from "react";
import SelectCard from "@components/SelectCard";
import axios from "axios";
/* eslint-disable*/
export default function Home() {
  const [rangeValue, setRangeValue] = useState(10);
  const [category, setCategory] = useState("");

  const handleClick = (result) => {
    const point = "https://opentdb.com/api.php?amount=10&type=multiple";
    axios.get(point).then((result) => result.json);
    console.log(result.json);
  };

  return (
    <div className="home">
      <div className="categories-bloc">
        <h1 className="cat">Sélectionnez votre catégorie</h1>
        <div className="choix">
          <ul className="radio-container">
            <input
              type="range"
              min="2"
              max="22"
              defaultValue={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </ul>
        </div>
        <div className="categorie-card">
          <div className="card">
            {Categories.slice(0, rangeValue).map((cat) => (
              <SelectCard
                Categories={cat}
                value={cat.value}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
