import React from "react";
import PropTypes from "prop-types";

import s from "./Feedback.module.css";

export default function Controls({ options, onLeaveFeedback }) {
  const btnMap = Object.keys(options);
  return (
    <div>
      {btnMap.map((option) => (
        <button
          key={option}
          name={option}
          type="button"
          onClick= {e =>
             {onLeaveFeedback(e.currentTarget.name)}}
          className={s.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};