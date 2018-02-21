import React, { Component } from 'react';
import './Import.css';
import ImportIcon from './ic_refresh_white_48px.svg';

class Import extends Component {
  render() {
    return (
      <div className="Import">
        <div className="Import-text">
          Oops ! No Book found!
          <br />
            &nbsp;&nbsp;&nbsp;Import them now?
        </div>
        <img src={ImportIcon} alt="Import Icon" />
      </div>
    );
  }
}

export default Import;
