import React from "react";
import "../Data/Categories";
import "../style/Home.css";
/*eslint-disable*/
function SelectCard({ Categories, handleClick }) {
  return (
    <div className="title">
      <h2 className="theme" onClick={handleClick}>
        {" "}
        {Categories.category}
        {Categories.value}
      </h2>
    </div>
  );
}

export default SelectCard;
