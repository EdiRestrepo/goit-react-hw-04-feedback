import { Component } from 'react'
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';


import './App.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  incrementNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  incrementBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    let totalReviews = this.state.good + this.state.neutral + this.state.bad;
    return totalReviews;
  };

  countPositiveFeedbackPercentage = () => {
    let percentagePositiveReviews =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(percentagePositiveReviews);
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <Section title={'Please leave feedback'}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <FeedbackOptions options={this.incrementGood} onLeaveFeedback={'Good'} />
            <FeedbackOptions options={this.incrementNeutral} onLeaveFeedback={'Neutral'} />
            <FeedbackOptions options={this.incrementBad} onLeaveFeedback={'Bad'} />
          </div>
          
        {this.countTotalFeedback() > 0 &&  <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />}
          {this.countTotalFeedback() === 0 && (<Notification message='There is no feedback'/>)}
        </Section>
      </div>
    );
  }
}

export default App;
