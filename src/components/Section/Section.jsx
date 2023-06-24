import React, { Component } from 'react';
import css from './Section.module.css';


class Section extends Component {
  static defaultProps = {
    title: 'Section',
  };
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

export default Section;
