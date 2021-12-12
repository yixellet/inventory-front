class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.parseResponse = this.parseResponse.bind(this);
  }

  parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status))
  }

  getInventory(id) {
    /**
     * Запрашивает полный перечень оборудования
     */
    const category = id ? 'category='+id : ''
    return fetch(`${this.baseUrl}/inventory/?${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getSingleInventoryItem(id) {
    /**
     * Запрашивает полный перечень оборудования
     */
    return fetch(`${this.baseUrl}/inventory/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getCategories() {
    /**
     * Запрашивает полный перечень категорий оборудования
     */
    return fetch(`${this.baseUrl}/category/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }
};

export default Api;
