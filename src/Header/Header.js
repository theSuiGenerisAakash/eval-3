import React from 'react';
import './Header.css';
import SettingsIcon from './ic_settings_white_24px.svg';
import RefreshIcon from './ic_refresh_white_24px.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-content">
          Bs
          <img src={RefreshIcon} alt="Refresh icon" id="Refresh" />
          <img src={SettingsIcon} alt="Settings icon" id="Settings" />
        </div>
      </header>
    );
  }
}
