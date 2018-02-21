import React from 'react';
import './Container.css';
import Import from '../Import/Import';

export default class Container extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Container-title">The Book Shelf</div>
        <Import />
      </div>
    );
  }
}
