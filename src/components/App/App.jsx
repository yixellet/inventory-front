import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import StartPage from '../SrartPage/StartPage';
import SearchPage from '../SearchPage/SearchPage';
import styles from './App.module.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: null,
    }
    this.handleSelectCategory = this.handleSelectCategory.bind(this)
  }

  handleSelectCategory(id, name) {
    this.setState({
      selectedCategory: {id: id, name: name},
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route exact path="/" element={<StartPage api={this.props.api} onCategoryClick={this.handleSelectCategory} />} />
            <Route path="/search" element={<SearchPage api={this.props.api} selectedCategory={this.state.selectedCategory} />} />
          </Routes>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
