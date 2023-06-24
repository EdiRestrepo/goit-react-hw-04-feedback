import React, { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = ()=>{
    this.setState({good: this.state.good + 1 });
}

incrementNeutral = ()=>{
  this.setState({neutral: this.state.neutral + 1 });
}

incrementBad = ()=>{
  this.setState({bad: this.state.bad + 1 });
}


  countTotalFeedback = () => {
    let totalReviews = this.state.good + this.state.neutral + this.state.bad;
    return totalReviews;
  };

  countPositiveFeedbackPercentage = () => {
    let percentagePositiveReviews = (this.state.good / this.countTotalFeedback())*100;
    return Math.round(percentagePositiveReviews);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.incrementGood}>Good</button>
          <button onClick={this.incrementNeutral}>Neutral</button>
          <button onClick={this.incrementBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
