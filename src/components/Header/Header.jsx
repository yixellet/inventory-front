import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <NavLink className={styles.headerLink} exact="true" to="/">
          <h1>Инвентаризация</h1>
        </NavLink>
      </header>
    )
  }
}

export default Header;
