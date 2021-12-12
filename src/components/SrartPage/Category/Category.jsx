import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Category.module.css';

class Category extends React.Component {

  render() {
    return (
      <li className={styles.menuItem}>
        <NavLink className={styles.link} to="/search" onClick={() => this.props.onCategoryClick(this.props.id, this.props.name)}>
          <h2>{this.props.name}</h2>
        </NavLink>
      </li>
    )
  }
}

export default Category;
