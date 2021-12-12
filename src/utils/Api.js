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

  getInventory() {
    /**
     * Запрашивает полный перечень оборудования
     */
    return fetch(`${this.baseUrl}/inventory/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }
};

export default Api;
