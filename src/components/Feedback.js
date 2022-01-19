import React from "react";
import Section from "./Section";
import Controls from "./Controls";
import Statistics from "./Statistics";

import s from "./Feedback.module.css";

export default class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCLick = (name) => {
    this.setState((prevState) => ({
        [name]: prevState[name] + 1,
      }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className={s.container}>
        <Section title="Будь ласка залишіть свій відгук">
          <Controls options={this.state} onLeaveFeedback={this.handleCLick} />
        </Section>
        <Section title="Статистика">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}