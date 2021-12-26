import React from "react";
import PropTypes from "prop-types";

export default function Controls({ options, onLeaveFeedback }) {
   const btnMap = Object.keys(options);
    return (
<div>
    {btnMap.map((item, ind) => (
        <button
        key={Math.random(3)}
        name={item}
        type="button"
        onClick={onLeaveFeedback}
        >
            {["Добре","Нейтрально","Погано"][ind]}
        </button>
    ))}
</div>
    );
}

Controls.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}