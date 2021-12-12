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
  }

  render() {
    return (
      <div ref={this.ref} className={styles.wrapper}>
        <div className={styles.popup}>
          <button onClick={this.props.closePopup}>Закрыть</button>
          <p>{this.props.data.model}</p>
          <h2 className={styles.title}>{this.props.data.description} <span>(s/n {this.props.data.serial_number})</span></h2>
          <p>{this.props.data.info}</p>
          <p>Инв. № {this.props.data.inv_number}</p>
          <p>Ответственное лицо: {this.props.data.owner}</p>
          {
            this.props.data.parent &&
            <p>Входит в состав <span onClick={() => this.props.changeInventory(this.props.data.pk)}>{this.state.parent}</span></p>
          }
        </div>
      </div>
    )
  }
}

export default Popup;
