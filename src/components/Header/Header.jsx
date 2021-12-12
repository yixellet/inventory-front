import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Инвентаризация</h1></header>
    )
  }
}

export default Header;
