import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return <button onClick={options}>{onLeaveFeedback}</button>;
  }
}

export default FeedbackOptions;
