import React, { Component } from 'react'
import css from './Notification.module.css'

export class Notification extends Component {
  render() {
    const {message} = this.props;
    return (
      <h2>{message}</h2>
    )
  }
}

export default Notification;


