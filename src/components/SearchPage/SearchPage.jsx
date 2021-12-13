import React from 'react';
import FiltersPanel from './FiltersPanel/FiltersPanel';
import Item from './Item/Item';
import Popup from '../Popup/Popup';
import styles from './SearchPage.module.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isPopupOpen: false,
      popupData: null,
    }
    this.handleOpenPopup = this.handleOpenPopup.bind(this)
    this.handleClosePopup = this.handleClosePopup.bind(this)
  }

  componentDidMount() {
    this.props.api.getInventory(this.props.selectedCategory.id)
      .then((data) => {
        this.setState({
          data: data
        })
      })
  }

  handleOpenPopup(id) {
    this.props.api.getSingleInventoryItem(id)
      .then((data) => {
        this.setState({
          isPopupOpen: true,
          popupData: data
        })
      })
  }

  handleClosePopup() {
    this.setState({
      isPopupOpen: false,
      popupData: null
    })
  }

  render() {
    return (
      <article className={styles.article}>
        <h1 className={styles.categoryTitle}>{this.props.selectedCategory.name}</h1>
        <div className={styles.content}>
          <FiltersPanel />
          <ul className={styles.itemList}>
            {
              this.state.data.map((item) => {
                return <Item key={item.pk} data={item} onItemClick={this.handleOpenPopup} />
              })
            }
          </ul>
        </div>
        {
          this.state.isPopupOpen &&
          <Popup data={this.state.popupData} 
                 api={this.props.api} 
                 closePopup={this.handleClosePopup} />
        }
      </article>
    )
  }
}

export default SearchPage;
