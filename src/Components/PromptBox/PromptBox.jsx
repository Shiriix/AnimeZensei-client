import React, { useState } from "react";
import { Link } from "react-router-dom";
import rikka from "../../Assets/images/rikka gif.gif";
import "./PromptBox.scss";

const PromptBox = ({ selectedOption, onChange }) => {
  return (
    <>
      <section className="section section--rays">
        <div className="simple-bubble">
          <div className="simple-bubble__main">
            <img className="simple-bubble__img" src={rikka} alt="rikka gif" />
            <p className="simple-bubble__text">
              Welcome to AnimeZensei! Select your favourite movie from the
              dropdown to get recommendations 👇
            </p>
          </div>
          <div className="simple-bubble__tail"></div>
        </div>
        <form className="form">
          <div className="form__div">
            <select
              value={selectedOption}
              onChange={onChange}
              className="form__dropdown"
            >
              <option value="">Select...</option>
              <option value="The Avengers">The Avengers</option>
              <option value="Lion King">Lion King</option>
              <option value="Titanic">Titanic</option>
              <option value="Django Unchained">Django Unchained</option>
            </select>
          </div>
        </form>
        <Link to={"/recommendations"}>
          <button className="form__button"> Check Recommendations</button>
        </Link>
      </section>
    </>
  );
};

export default PromptBox;
