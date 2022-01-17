import React from "react";

import Notification from "./Notification";
import s from "./Feedback.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <ul>
          <li>
            <span className={s.good}>Добре</span>: {good}
          </li>
          <li>
            <span className={s.neutral}>Нейтрально</span>: {neutral}
          </li>
          <li>
            <span className={s.bad}> Погано</span>: {bad}
          </li>
          <li className={s.total}> Загально відгуків: {total} </li>
          <li className={s.positivePercentage}>
            Хороших відгуків: {positivePercentage}%{" "}
          </li>
        </ul>
      ) : (
        <Notification message="Наразі відгуки відсутні! :)" />
      )}
    </div>
  );
}