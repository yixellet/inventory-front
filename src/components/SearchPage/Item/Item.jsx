import React from 'react';
import styles from './Item.module.css';

class Item extends React.Component {

  render() {
    return (
      <li className={styles.inventoryItem} onClick={() => this.props.onItemClick(this.props.data.pk)}>
        <article>
          <h2 className={styles.title}><span className={styles.model}>{this.props.data.model}</span> {this.props.data.description}</h2>
          <p className={styles.invNumber}><span className={styles.model}>Инв. № </span>{this.props.data.inv_number}</p>
        </article>
      </li>
    )
  }
}

export default Item;
