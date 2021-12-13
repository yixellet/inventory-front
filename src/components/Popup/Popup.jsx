import React from 'react';
import styles from './Popup.module.css';

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parent: null,
      children: []
    }
  }

  componentDidMount() {
    this.props.data.parent &&
    this.props.api.getSingleInventoryItem(this.props.data.parent)
      .then((data) => {
        this.setState({
          parent: data.description
        })
      })
    const arr = []
    this.props.data.inventory.length !== 0 &&
    this.props.data.inventory.forEach((itemId) => {
      this.props.api.getSingleInventoryItem(itemId)
        .then((data) => {arr.push(data)})
    })
    console.log(arr)
    this.setState({
      children: arr
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.popup}>
          <p>{this.props.data.model}</p>
          <h2 className={styles.title}>{this.props.data.description} <span>(s/n {this.props.data.serial_number})</span></h2>
          <p>{this.props.data.info}</p>
          <p>Инв. № {this.props.data.inv_number}</p>
          <p>Ответственное лицо: {this.props.data.owner}</p>
          {
            this.props.data.parent &&
            <p>Входит в состав {this.state.parent}</p>
          }
          {
            this.props.data.inventory.length !== 0 &&
            <ul>Комплектующие:
              {
                this.state.children.map((item) => {
                  return <li key={item.pk}>{item.description}</li>
                })
              }
            </ul>
          }
          <button className={styles.closeButton} onClick={this.props.closePopup}>Закрыть</button>
        </div>
      </div>
    )
  }
}

export default Popup;
