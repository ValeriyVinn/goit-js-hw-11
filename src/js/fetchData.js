// Your API key: 35690812-dd9c3c40d4b5b42ada9774bd3

import axios from 'axios';

const API_KEY = '35690812-dd9c3c40d4b5b42ada9774bd3';
const API_URL = 'https://pixabay.com/api/';
const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: '',
    page: 1,
    per_page: 40,
  },
};

class Fetch {
  constructor() {}

  async getImages(userQuery) {
    try {
      options.params.q = userQuery;
      const response = await axios.get(API_URL, options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  pageIncrement() {
    options.params.page += 1;
  }

  pageRestart() {
    options.params.page = 1;
  }
}

export default Fetch;