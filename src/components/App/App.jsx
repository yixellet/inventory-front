import React from 'react';
import Header from '../Header/Header';
import styles from './App.module.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <main className={styles.main}>

        </main>
      </>
    )
  }
}

export default App;
