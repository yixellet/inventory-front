import React from 'react';
import Category from './Category/Category';
import styles from './StartPage.module.css';

class StartPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    this.props.api.getCategories()
      .then((categories) => {
        this.setState({
          categories: categories,
        })
      })
  }

  render() {
    return (
      <article className={styles.article}>
        <nav className={styles.startMenu}>
          <ul className={styles.menuItemsList}>
            {
              this.state.categories.map((category) => {
                return <Category key={category.pk} name={category.name} id={category.pk} onCategoryClick={this.props.onCategoryClick} />
              })
            }
            <Category name='Огласите весь список, пожалуйста' id={null} onCategoryClick={this.props.onCategoryClick} />
          </ul>
        </nav>
      </article>
    )
  }
}

export default StartPage;
